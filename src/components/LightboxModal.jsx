import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "react-feather"

export default function LightboxModal({ dlgRef, images, idx, close, prev, next }) {

    return (
        <dialog ref={dlgRef} className="modal">
                    <div className="modal-box p-2 max-w-5xl">
                      <div className="relative">
                        {images[idx] && (
                          <div className="relative w-full aspect-[16/10]">
                            <Image
                              src={images[idx].url}
                              alt={images[idx].alt}
                              fill
                              className="object-contain bg-base-200 rounded"
                            />
                          </div>
                        )}
        
                        {/* Controls */}
                        {images.length > 1 && (
                          <>
                            <button className="btn btn-circle absolute left-2 top-1/2 -translate-y-1/2" onClick={prev}>
                              <ChevronLeft />
                            </button>
                            <button className="btn btn-circle absolute right-2 top-1/2 -translate-y-1/2" onClick={next}>
                              <ChevronRight />
                            </button>
                          </>
                        )}
                        <button className="btn btn-ghost btn-sm absolute right-2 top-2" onClick={close} aria-label="Close">
                          <X />
                        </button>
                      </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button aria-label="Close" onClick={close}>close</button>
                    </form>
                  </dialog>
    )
}
