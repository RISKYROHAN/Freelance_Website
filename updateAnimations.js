const fs = require('fs');
const path = require('path');
const dir = './components';

const newAnim = `  const fadeInUp = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 15,
        mass: 0.8,
        duration: 0.8
      } 
    }
  };`;

fs.readdirSync(dir).forEach(file => {
  if (!file.endsWith('.js')) return;
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('const fadeInUp = {')) {
    // Regex to match the old fadeInUp object
    content = content.replace(/const fadeInUp = \{[\s\S]*?\n  \};/, newAnim.trim());
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + file);
  }
});
