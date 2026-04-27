const fs = require('fs');
const path = require('path');

const SOURCE_DIR = 'C:/Users/localifi-redesign-main/src';
const NEXT_DIR = 'C:/Users/freelance_website';

console.log("🚀 Starting Lovable Design Sync...");

// 1. Copy Components
console.log("📦 Syncing Components...");
fs.cpSync(path.join(SOURCE_DIR, 'components'), path.join(NEXT_DIR, 'components'), { recursive: true });

// 2. Copy Lib (utils etc.)
console.log("📦 Syncing Lib...");
fs.cpSync(path.join(SOURCE_DIR, 'lib'), path.join(NEXT_DIR, 'lib'), { recursive: true });

// 3. Copy Hooks
console.log("📦 Syncing Hooks...");
if (fs.existsSync(path.join(SOURCE_DIR, 'hooks'))) {
    fs.cpSync(path.join(SOURCE_DIR, 'hooks'), path.join(NEXT_DIR, 'hooks'), { recursive: true });
}

// 4. Copy Assets directly into public/assets
console.log("🖼️  Syncing Assets to public...");
const publicAssetsDir = path.join(NEXT_DIR, 'public', 'assets');
if (fs.existsSync(path.join(SOURCE_DIR, 'assets'))) {
    fs.cpSync(path.join(SOURCE_DIR, 'assets'), publicAssetsDir, { recursive: true });
}

// 5. Overwrite Globals.css
console.log("🎨 Syncing global styles...");
if (fs.existsSync(path.join(SOURCE_DIR, 'index.css'))) {
    fs.copyFileSync(path.join(SOURCE_DIR, 'index.css'), path.join(NEXT_DIR, 'app', 'globals.css'));
}

// 6. Fix Vite Image Imports for Next.js Context
console.log("🔧 Patching image imports for Next.js compatibility...");

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function patchFile(filePath) {
    if (!filePath.endsWith('.js') && !filePath.endsWith('.jsx')) return;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    let hasChanges = false;

    // Pattern to catch: import varName from "@/assets/file.jpg";
    const importRegex = /import\s+([A-Za-z0-9_]+)\s+from\s+["']@\/assets\/([^"']+)["'];?/g;
    let match;
    const mappings = {};

    // Remove the imports and build map
    while ((match = importRegex.exec(content)) !== null) {
        const varName = match[1];
        const fileName = match[2];
        mappings[varName] = `/assets/${fileName}`;
        hasChanges = true;
    }

    if (hasChanges) {
        // Strip the identified imports
        content = content.replace(importRegex, '');

        // Now replace usage of those variables with string literals
        // Example: <img src={wMedical} />  becomes <img src="/assets/work-medical.jpg" />
        // Example: img: wMedical becomes img: "/assets/work-medical.jpg"
        for (const [varName, stringPath] of Object.entries(mappings)) {
            // Replace exact {varName} in JSX
            const jsxRegex = new RegExp(`{\\s*${varName}\\s*}`, 'g');
            content = content.replace(jsxRegex, `"${stringPath}"`);

            // Replace plain varName in JS object properties or conditionals (e.g. img: varName)
            // Using word boundary \b
            const varRegex = new RegExp(`\\b${varName}\\b`, 'g');
            content = content.replace(varRegex, `"${stringPath}"`);
        }

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`   ✅ Patched imports in ${path.basename(filePath)}`);
    }

    // --- APPLY NEXTJS SPECIFIC BUGFIXES & LOGIC ---

    // 1. Universal Lucide-React Brand Icon Fix
    // If ANY file imports deprecated brand icons, strip them and inject safe SVG implementations.
    if (content.includes('lucide-react')) {
        let hasInjected = false;
        content = content.replace(/import\s+{([^}]*?)}\s+from\s+["']lucide-react["'];/g, (match, p1) => {
            let names = p1.split(',').map(s => s.trim()).filter(s => s);
            let kept = [];
            for (let name of names) {
                if (['Instagram', 'Linkedin', 'Twitter', 'Facebook'].includes(name)) { // Added Facebook just in case
                    hasInjected = true;
                } else {
                    kept.push(name);
                }
            }
            return kept.length > 0 ? `import { ${kept.join(', ')} } from "lucide-react";` : '';
        });

        if (hasInjected) {
            const injectCode = `
// Auto-injected legacy Lucide brand icons to prevent build crashes
const Instagram = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> );
const Linkedin = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg> );
const Twitter = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg> );
const Facebook = (props) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg> );
`;
            let lastImportIndex = content.lastIndexOf('import ');
            let insertPos = lastImportIndex !== -1 ? content.indexOf('\\n', lastImportIndex) + 1 : 0;
            content = content.slice(0, insertPos) + '\\n' + injectCode + '\\n' + content.slice(insertPos);
            
            fs.writeFileSync(filePath, content, 'utf-8');
            console.log(\`   🛠️ Auto-patched missing Lucide icons in \${path.basename(filePath)}\`);
        }
    }

    if (path.basename(filePath) === 'Contact.jsx') {
        let contactContent = fs.readFileSync(filePath, 'utf-8');
        if (contactContent.includes('setTimeout')) {
            contactContent = contactContent.replace(/const onSubmit = \(e\) => {[\s\S]*?};/, `const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const formData = {
                name: e.target.name.value,
                email: e.target.email.value,
                businessType: e.target.businessType.value,
                message: e.target.message.value
            };
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                toast.success("Thanks! I'll be in touch within 24 hours.");
                e.target.reset();
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred.");
        } finally {
            setLoading(false);
        }
    };`);
            contactContent = contactContent.replace(/type="text"/g, 'name="name" type="text"');
            contactContent = contactContent.replace(/type="email"/g, 'name="email" type="email"');
            contactContent = contactContent.replace(/<select required defaultValue=""/g, '<select required name="businessType" defaultValue=""');
            contactContent = contactContent.replace(/<textarea required rows=\{4\}/g, '<textarea required name="message" rows={4}');
            fs.writeFileSync(filePath, contactContent, 'utf-8');
            console.log(`   🛠️ Auto-patched Next.js API routing in Contact.jsx`);
        }
    }

    if (path.basename(filePath) === 'Works.jsx') {
        let worksContent = fs.readFileSync(filePath, 'utf-8');
        if (worksContent.includes('grid md:grid-cols-2')) {
            worksContent = worksContent.replace(/<div className="grid md:grid-cols-2 gap-5 lg:gap-6">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, `<div className="flex overflow-x-auto gap-5 lg:gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-border/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/50 transition-colors after:content-[''] after:w-px after:shrink-0 sm:after:hidden">
          {works.map((w, i) => (<article key={w.title} className="shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px] snap-center group relative rounded-3xl overflow-hidden bg-surface border border-border hover:border-primary/40 transition-all duration-500 flex flex-col h-full">
                <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                  <img src={w.img} alt={w.title} loading="lazy" width={1024} height={1280} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"/>
                  <div className="absolute top-5 left-5 glass rounded-full px-3 py-1.5 text-[11px] font-medium text-foreground">
                    {w.category}
                  </div>
                </div>
                <div className="p-7 lg:p-9 flex flex-col flex-grow">
                    <div className="flex items-start justify-between gap-4 mb-5 min-h-[4rem] lg:min-h-[4.5rem]">
                      <h3 className="font-display text-2xl lg:text-3xl font-semibold leading-tight">{w.title}</h3>
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border group-hover:bg-gradient-primary group-hover:border-transparent group-hover:rotate-45 transition-all duration-500">
                        <ArrowUpRight className="h-4 w-4"/>
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-[11px] uppercase tracking-widest text-accent font-medium mb-1.5">Challenge</div>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 min-h-[4.5rem]">{w.challenge}</p>
                      </div>
                      <div className="h-px bg-border"/>
                      <div>
                        <div className="text-[11px] uppercase tracking-widest text-primary font-medium mb-1.5">Solution</div>
                        <p className="text-sm text-foreground/90 leading-relaxed line-clamp-3 min-h-[4.5rem]">{w.solution}</p>
                      </div>
                    </div>
                </div>
            </article>))}
        </div>
      </div>
    </section>`);
            fs.writeFileSync(filePath, worksContent, 'utf-8');
            console.log(`   🛠️ Auto-patched Works.jsx horizontal scroller & alignment`);
        }
    }
}

const componentsDir = path.join(NEXT_DIR, 'components');
if (fs.existsSync(componentsDir)) {
    walkDir(componentsDir, patchFile);
}

console.log("✨ Lovable Sync Completed Successfully! You can now view your updated design. 🚀");
