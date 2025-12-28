"use client"

import { useDisclosure } from "@mantine/hooks"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"
import { AdminChatbot } from "@/components/admin/admin-chatbot"
import { AppShell, useMantineColorScheme } from "@mantine/core"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [opened, { toggle }] = useDisclosure()
  const { colorScheme } = useMantineColorScheme()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 260,
        breakpoint: "lg",
        collapsed: { mobile: !opened },
      }}
      padding={{ base: 'md', md: 'lg' }}
      styles={(theme) => ({
        main: {
          backgroundColor: colorScheme === 'dark' ? '#1A1B1E' : '#FFFFFF',
          paddingLeft: 'calc(var(--mantine-navbar-width) + 16px)',
          paddingRight: '16px',
          paddingTop: 'calc(var(--mantine-header-height, 0px) + 16px)',
          paddingBottom: '16px',
          minHeight: '100vh',
          transition: 'padding-left 200ms ease',
        },
      })}
    >
      <AppShell.Header>
        <AdminHeader opened={opened} toggle={toggle} />
      </AppShell.Header>

      <AppShell.Navbar>
        <AdminSidebar />
      </AppShell.Navbar>

      <AppShell.Main style={{ 
        width: '100%',
        maxWidth: '100%',
        margin: 0,
        padding: 0,
        transition: 'all 200ms ease',
      }}>
        <div style={{ 
          backgroundColor: 'var(--mantine-color-body)',
          height: '100%',
          minHeight: 'calc(100vh - var(--mantine-header-height, 0px))',
          padding: '20px 40px',
          marginLeft: '260px',
          width: 'calc(100% - 260px)'
        }}>
          {children}
        </div>
      </AppShell.Main>

      <AdminChatbot />
    </AppShell>
  )
}
