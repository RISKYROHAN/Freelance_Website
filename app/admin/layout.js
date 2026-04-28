export const metadata = {
  title: 'Admin Dashboard | CatalystWeb Solutions',
  description: 'Manage your portfolio inquiries',
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-corporate-50">
      {children}
    </div>
  );
}
