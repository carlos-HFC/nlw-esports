import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from "phosphor-react";

export function CreateAdBanner() {
  return (
    <div className="pt-1 mt-8 bg-nlw-gradient rounded-lg self-stretch overflow-hidden">
      <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
          <span className="text-base text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
        </div>

        <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-600 transition-colors text-white text-base rounded flex items-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}