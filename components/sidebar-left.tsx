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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { ChevronDown, Home, Type } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from './ui/collapsible'

type SubItem = {
  name: string
  href: string
}

type Item = {
  icon?: LucideIcon
  name: string
  href: string
  subItems?: SubItem[]
}

type Group = {
  groupLabel?: string
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
      },
      {
        icon: Type,
        name: 'Shadcn',
        href: '/',
        subItems: [
          {
            name: 'Button',
            href: '/'
          },
          {
            name: 'Input',
            href: '/'
          }
        ]
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
          {group.groupLabel && (
            <SidebarGroupLabel>{group.groupLabel}</SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu>
              {group.items.map((item, index) =>
                !item.subItems ? (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild>
                      <Link
                        onClick={() => setOpenMobile(false)}
                        href={item.href}
                      >
                        {item.icon && <item.icon />}
                        <span>{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ) : (
                  <SidebarMenuItem key={index}>
                    <Collapsible>
                      <CollapsibleTrigger className='group/collapsible' asChild>
                        <SidebarMenuButton>
                          {item.name}
                          <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem, index) => (
                            <SidebarMenuSubItem key={index}>
                              <SidebarMenuSubButton asChild>
                                <Link
                                  onClick={() => setOpenMobile(false)}
                                  href={subItem.href}
                                >
                                  {subItem.name}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  </SidebarMenuItem>
                )
              )}
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
