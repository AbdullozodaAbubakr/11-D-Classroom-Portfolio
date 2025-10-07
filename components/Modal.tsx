import * as Dialog from "@radix-ui/react-dialog"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { closeModal } from "../store/modalSlice"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function Modal() {
  const dispatch = useDispatch()
  const { open, person } = useSelector((s: RootState) => s.modal)

  return (
    <AnimatePresence>
      {open && person && (
        <Dialog.Root open={open} onOpenChange={(v) => { if (!v) dispatch(closeModal()) }}>
          <Dialog.Portal>
            <Dialog.Overlay asChild>
              <motion.div className="fixed inset-0 bg-black/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <div className="fixed inset-0 flex items-center justify-center p-4">
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  className="w-[92vw] max-w-lg max-h-[80vh] overflow-y-auto card-surface p-4 sm:p-6 focus:outline-none"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-full border" aria-hidden>
                      <Image src={person.image} alt={person.name} fill sizes="80px" className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <Dialog.Title className="text-lg font-semibold truncate">{person.name}</Dialog.Title>
                      <Dialog.Description className="text-sm text-muted truncate">{person.tag || person.role}</Dialog.Description>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed">{person.fullDesc}</p>
                  <div className="mt-6 flex justify-end gap-3">
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
