'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { Home, Type } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Item = {
  icon?: LucideIcon
  name: string
  href: string
}

type Group = {
  groupLabel: string
  items: Item[]
}

const groups: Group[] = [
  {
    groupLabel: 'General',
    items: [
      {
        icon: Home,
        name: 'Home',
        href: '/'
      },
      {
        icon: Type,
        name: 'Fonts',
        href: '/fonts'
      }
    ]
  }
]

function SidebarGroups() {
  const { setOpenMobile } = useSidebar()
  return (
    <>
      {groups.map((group, index) => (
        <SidebarGroup key={index}>
          <SidebarGroupLabel>{group.groupLabel}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.items.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link onClick={() => setOpenMobile(false)} href={item.href}>
                      {item.icon && <item.icon />}
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  )
}

export function SidebarLeft() {
  return (
    <Sidebar variant='sidebar' collapsible='icon'>
      <SidebarContent>
        <SidebarGroups />
      </SidebarContent>
    </Sidebar>
  )
}
