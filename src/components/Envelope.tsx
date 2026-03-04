import { LoadingImage } from '@/routes';

type Props = {
    className?: string;
    onImageLoad: () => void;
}

const Envelope = ({
    className = "",
    onImageLoad
}: Props) => {
    return (
        <div className={`items-center w-[70%] mt-8 rotate-6 flex flex-col relative h-[50%] max-h-[340px] ${className}`}>
            <div className="bg-letter w-full h-100 bottom-0 z-0">
                <div className="flex flex-col -rotate-2 mx-auto mt-8 w-fit">
                    <div className="mx-auto">
                        <h3 className="font-parisienne text-2xl text-center">Dear</h3>
                        <h2 className="uppercase text-4xl">Guest <br /> Name</h2>
                    </div>
                    <span className="uppercase text-lg">You are invited to ... </span>
                </div>
            </div>
            <div className="absolute bottom-0 w-fit z-10">
                <LoadingImage
                    src="/assets/ornament-flower.webp"
                    className="absolute right-2 rotate-2 -top-18 m-auto -z-1 w-[30%] object-contain"
                    onImageLoad={onImageLoad}
                />
                <LoadingImage
                    src="/assets/envelope-stamp.webp"
                    className="absolute m-auto inset-0 z-10 -translate-y-3 size-12"
                    onImageLoad={onImageLoad}
                />
                <LoadingImage src="/assets/envelope-body.webp" className="z-100" alt="" onImageLoad={onImageLoad} />
            </div>
        </div>
    );
}

export default Envelope
