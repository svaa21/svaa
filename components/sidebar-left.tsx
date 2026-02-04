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
import { usePathname } from 'next/navigation'

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

export function SidebarLeft() {
  return (
    <Sidebar variant='sidebar' collapsible='icon'>
      <SidebarContent>
        <SidebarGroups />
      </SidebarContent>
    </Sidebar>
  )
}

function SidebarGroups() {
  const pathname = usePathname()
  console.log(pathname)
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
                    <SidebarMenuButton
                      isActive={item.href === pathname}
                      asChild
                    >
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
                    <Collapsible
                      defaultOpen={
                        item.subItems.some(item => item.href === pathname) ||
                        item.open
                      }
                    >
                      <CollapsibleTrigger className='group/collapsible' asChild>
                        <SidebarMenuButton>
                          {item.icon && <item.icon />}
                          {item.name}
                          <CollapsibleIcon />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.subItems.map((subItem, index) =>
                            !subItem.subSubItems ? (
                              <SidebarMenuSubItem key={index}>
                                <SidebarMenuSubButton
                                  isActive={subItem.href === pathname}
                                  asChild
                                >
                                  <Link
                                    onClick={() => setOpenMobile(false)}
                                    href={subItem.href}
                                  >
                                    {subItem.icon && <subItem.icon />}
                                    {subItem.name}
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ) : (
                              <Collapsible
                                defaultOpen={
                                  subItem.subSubItems.some(
                                    subSubItem => subSubItem.href === pathname
                                  ) || subItem.open
                                }
                                key={index}
                              >
                                <CollapsibleTrigger
                                  className='group/collapsible'
                                  asChild
                                >
                                  <SidebarMenuSubButton>
                                    {subItem.icon && <subItem.icon />}
                                    {subItem.name}
                                    <CollapsibleIcon />
                                  </SidebarMenuSubButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <SidebarMenuSub>
                                    {subItem.subSubItems.map(
                                      (subSubItem, index) => (
                                        <SidebarMenuSubItem key={index}>
                                          <SidebarMenuSubButton
                                            isActive={
                                              subSubItem.href === pathname
                                            }
                                            asChild
                                          >
                                            <Link
                                              onClick={() =>
                                                setOpenMobile(false)
                                              }
                                              href={subSubItem.href}
                                            >
                                              {subSubItem.icon && (
                                                <subSubItem.icon />
                                              )}
                                              {subSubItem.name}
                                            </Link>
                                          </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                      )
                                    )}
                                  </SidebarMenuSub>
                                </CollapsibleContent>
                              </Collapsible>
                            )
                          )}
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

function CollapsibleIcon() {
  return (
    <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
  )
}

type SubSubItem = {
  icon?: LucideIcon
  name: string
  href: string
}

type SubItem = {
  open?: boolean
  icon?: LucideIcon
  name: string
  href: string
  subSubItems?: SubSubItem[]
}

type Item = {
  open?: boolean
  icon?: LucideIcon
  name: string
  href: string
  subItems?: SubItem[]
}

type Group = {
  groupLabel?: string
  items: Item[]
}
