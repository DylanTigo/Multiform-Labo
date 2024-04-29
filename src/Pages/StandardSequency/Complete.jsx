import { CircleCheckBig } from "lucide-react";


export default function Complete() {
  return (
    <div className="flex justify-center items-center flex-col h-[-webkit-fill-available]">
      <CircleCheckBig className="size-16 text-blue-500 mb-6" />
      <h1 className="text-center text-3xl font-bold">Complete!</h1>
      <p className="text-lg leading-7 dark:text-gray-400 sm:mx-auto">Your order have been placed successfully</p>
    </div>
  )
}
