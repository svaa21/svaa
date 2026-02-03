import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { Home, User, Contact } from 'lucide-react'

const groups = [
  {
    groupLabel: 'General',
    items: [
      {
        icon: Home,
        name: 'Home',
        href: '/'
      }
    ]
  },

  {
    groupLabel: 'Information',
    items: [
      {
        icon: User,
        name: 'Profile',
        href: '/profile'
      },
      {
        icon: Contact,
        name: 'Contact',
        href: '/contact'
      }
    ]
  }
]

export function SidebarLeft() {
  return (
    <Sidebar className='mt-2 pb-2' variant='sidebar' collapsible='icon'>
      <SidebarContent>
        {groups.map((group, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupLabel>{group.groupLabel}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item, index) => (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
