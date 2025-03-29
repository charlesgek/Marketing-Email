import { EmailCanvas } from './EmailCanvas';
import { AISidebar } from './AISidebar';

export default function CampaignEditor() {
  return (
    <div className="flex h-[calc(100vh-80px)]">
      <div className="w-80 border-r bg-white p-4">
        <AISidebar />
      </div>
      <div className="flex-1 overflow-auto p-6">
        <EmailCanvas />
      </div>
    </div>
  );
}