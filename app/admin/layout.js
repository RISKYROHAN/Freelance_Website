export const metadata = {
  title: 'Admin Dashboard | Localify',
  description: 'Manage your portfolio inquiries',
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-corporate-50">
      {children}
    </div>
  );
}
