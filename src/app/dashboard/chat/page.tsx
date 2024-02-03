import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChatDirectMessages, ChatStat } from '@/components/chat';

export default function ChatPage() {
  return (
    <section>
      {/* Stats */}
      <ChatStat />
      <div className="mt-[59px]">
        <Tabs defaultValue="messages">
          <TabsList className="border-b border-neutral-100 w-full justify-start">
            <TabsTrigger value="messages" className="bg-transparent">
              Direct Messages
            </TabsTrigger>
            <TabsTrigger value="groups" className="bg-transparent">
              Groups
            </TabsTrigger>
          </TabsList>
          <TabsContent value="messages" className="mt-5">
            <ChatDirectMessages />
          </TabsContent>
          <TabsContent value="groups" className="mt-5">
            🫣 Nothing to see here...
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
