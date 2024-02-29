// app/page.tsx

import ModelRenderer from "@/components/model-renderer";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col bg-gray-300">
      <div className="relative w-[90%] max-w-[1000px] h-auto mt-20">
        <ModelRenderer />
      </div>
    </div>
  );
}
