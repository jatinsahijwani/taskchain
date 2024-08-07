"use client";
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


export default function TaskMasterHomePage() {

  const handleCreateAccount = async() => {
    const response = await fetch('http://localhost:3002/create-keypair',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="grid min-h-screen w-full grid-cols-[280px_1fr] bg-muted/40">
      
      
      <div className="flex flex-col border-r bg-[#0B0014] text-white ">
        <div className="flex h-[60px] text-2xl items-center border-b px-6">
          <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
            <TimerIcon className="h-6 w-6 text-[#26A7F7]" />
            <span className="">TaskChain</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-4 text-xl font-medium">
          
            <Link
              href="#"
              className="flex items-center gap-5 rounded-lg px-3 py-3 text-primary transition-all hover:bg-[#022D50]"
              prefetch={false}
            >
              <UserIcon className="h-4 w-4" />
              Account
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:bg-[#022D50]"
              prefetch={false}
            >
              <SettingsIcon className="h-4 w-4" />
              Settings
            </Link>
            
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:bg-[#022D50]"
              prefetch={false}
            >
              <ClockIcon className="h-4 w-4" />
              History
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:bg-[#022D50]"
              prefetch={false}
            >
              <ListIcon className="h-4 w-4" />
              Manage Tasks
            </Link>
          </nav>
        </div>
      </div>



      <div className="flex flex-col">
      <header className="flex h-[60px] items-center justify-between border-b bg-gray-200 px-6">
          <h1 className="text-2xl font-bold">Welcome Taskmaster!</h1>
          <div className=" ml-[45vw]">
              <Input
                type="search"
                placeholder="Search tasks..."
                className="w-full rounded-lg bg-muted px-8 py-2 text-sm"
              />
              <SearchIcon className="absolute left-2 top-2 h-4 w-4 text-muted-foreground" />
            </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Button onClick={handleCreateAccount} className="bg-[#0B0014] px-2 py-2 w-[6vw] h-[5vh] text-md hover:bg-[#17507e] text-white">Add Wallet</Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full border w-8 h-8">
                  <img
                    src="/placeholder.svg"
                    width="32"
                    height="32"
                    className="rounded-full"
                    alt="Avatar"
                    style={{ aspectRatio: "32/32", objectFit: "cover" }}
                  />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-6">
        <div>
            <h1 className="text-3xl font-bold mb-6">Post a New Task</h1>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Task Title</Label>
                <Input id="title" placeholder="e.g. Design a logo" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Task Description</Label>
                <Textarea id="description" rows={4} placeholder="Describe the task in detail..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input id="deadline" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="budget">Budget</Label>
                  <Input id="budget" type="number" placeholder="$100" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="file-upload">Attach Files</Label>
                <Input id="file-upload" type="file" multiple />
              </div>
              <Button type="submit" className="justify-self-end bg-[#0B0014] px-2 py-2 w-[6vw] h-[5vh] text-md hover:bg-[#17507e] text-white">
                Post Task
              </Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Available Tasks</h2>
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Design a logo</CardTitle>
                  <CardDescription>We need a modern, minimalist logo for our new startup.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm font-medium">Deadline:</p>
                      <p>2023-06-30</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Budget:</p>
                      <p>$500</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#0B0014] px-2 py-2 w-[6vw] h-[5vh] text-md hover:bg-[#17507e] text-white">Apply</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Write blog post</CardTitle>
                  <CardDescription>
                    We need a 1000-word blog post on the latest trends in web development.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm font-medium">Deadline:</p>
                      <p>2023-05-15</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Budget:</p>
                      <p>$200</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#0B0014] px-2 py-2 w-[6vw] h-[5vh] text-md hover:bg-[#17507e] text-white">Apply</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Develop a mobile app</CardTitle>
                  <CardDescription>We need a fully functional mobile app for both iOS and Android.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-sm font-medium">Deadline:</p>

                      <p>2023-09-01</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Budget:</p>
                      <p>$5000</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-[#0B0014] px-2 py-2 w-[6vw] h-[5vh] text-md hover:bg-[#17507e] text-white">Apply</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function ListIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  )
}


function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function TimerIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  )
}


function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function WalletIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
        <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
      </svg>
    )
  }
  