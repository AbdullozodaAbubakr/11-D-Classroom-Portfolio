import * as Dialog from "@radix-ui/react-dialog"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

type Props = {
  open: boolean
  src: string
  alt: string
  onClose: () => void
  title?: string
  description?: string
}

export default function ImageLightbox({ open, src, alt, onClose, title, description }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <Dialog.Root open={open} onOpenChange={(v) => { if (!v) onClose() }}>
          <Dialog.Portal>
            <Dialog.Overlay asChild>
              <motion.div className="fixed inset-0 bg-black/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <div className="fixed inset-0 flex items-center justify-center p-4">
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  className="w-[96vw] max-w-4xl max-h-[85vh] overflow-y-auto card-surface p-3 sm:p-4"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.98 }}
                >
                  <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-lg overflow-hidden">
                    <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 80vw" className="object-contain bg-[color:var(--bg)]" />
                  </div>
                  {(title || description) && (
                    <div className="mt-3">
                      {title && <Dialog.Title className="text-base font-semibold">{title}</Dialog.Title>}
                      {description && <Dialog.Description className="text-sm text-muted mt-1">{description}</Dialog.Description>}
                    </div>
                  )}
                  <div className="mt-4 flex justify-end">
                    <Dialog.Close asChild>
                      <button className="btn">Close</button>
                    </Dialog.Close>
                  </div>
                </motion.div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </AnimatePresence>
  )
}
