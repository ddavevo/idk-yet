"use client"

import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'

import BranchedMenu from '@/components/reactbits-dev/BranchedMenu'
import { Download, Rocket, Settings } from 'lucide-react'
import { useNavigate } from 'react-router'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import './HomePage.css';

export function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      <Header />

      <div className="flex min-h-svh p-6">

        <div className="branchedmenu-container">
          <BranchedMenu
            items={[
              {
                label: 'Getting started',
                children: [
                  { value: '/', label: 'Installation', icon: <Download size={18} /> },
                  { value: '', label: 'Quick start', icon: <Rocket size={18} /> },
                  { value: '', label: 'Configuration', icon: <Settings size={18} /> }
                ]
              },
              {
                label: 'Components', children: [
                  { value: '/', label: 'Buttons' },
                  { value: '', label: 'Overlays' }
                ]
              }
            ]}
            defaultOpen={[0]}
            defaultActive="quick"
            onSelect={value => navigate(value)}
            color="var(--foreground)"
            accentColor="var(--foreground)"
            lineColor="var(--border)"
            width={240}
            rowHeight={36}
            indent={40}
            trunk={14}
            radius={10}
            lineWidth={1.5}
            fontSize={14}
            drawDuration={400}
            foldDuration={300}
          />
        </div>

        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose primary-content">
          <div>
            <h1 className="font-medium">Project ready!</h1>
            <p>You may now add components and start building.</p>
            <p>We&apos;ve already added the button component for you.</p>

            <DropdownMenu>
              <DropdownMenuTrigger render={<Button className="mt-2">Press me!</Button>} />
              <DropdownMenuContent>
                <DropdownMenuGroup>

                  <DropdownMenuItem>Team</DropdownMenuItem>

                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>

                    <DropdownMenuPortal>

                      <DropdownMenuSubContent>
                        <DropdownMenuItem>Email</DropdownMenuItem>
                        <DropdownMenuItem>Message</DropdownMenuItem>

                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>More options</DropdownMenuSubTrigger>
                          <DropdownMenuPortal>

                            <DropdownMenuSubContent>
                              <DropdownMenuItem>Calendly</DropdownMenuItem>
                              <DropdownMenuItem>Slack</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Webhook</DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>

                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Advanced...</DropdownMenuItem>

                      </DropdownMenuSubContent>

                    </DropdownMenuPortal>

                  </DropdownMenuSub>

                  <DropdownMenuItem>
                    New Team
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>

                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
      </div>
    </>
  )
}