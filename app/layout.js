
import "./globals.css";
import AppShell from "../components/AppShell";

export const metadata = {
  title: "InvestPro - Investment Dashboard",
  description: "Manage your investments with InvestPro.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
