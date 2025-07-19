"use client"

import GradeA from "./icons/GradeA"
import QuestionMarkIcon from "./icons/QuestionMarkIcon"
import { useCurrentDomain } from "./hooks/useCurrentDomain"

export default function Home() {
  const { domain, isClient } = useCurrentDomain()

  return (
    <div className="flex flex-col gap-4 h-screen w-screen items-center justify-center ">
      <div className="bg-[#EFEFEF] w-[300px] h-[150px] rounded-xl flex flex-col">
        <div className="flex flex-col mx-2.5 mt-3">
          <h1 className="text-background text-2xl font-bold">FINNRICK RATING™</h1>
          <div className="border-b-1 border-background" />
        </div>
        <div className="flex mx-2.5 my-2">
          <div className="flex-1">
            <p className="widget-text-content">Shanghai Innovy Chemical New Materials</p>
            <p className="widget-text-content">Tesamorelin, CJC-1295, Ipamorelin</p>
          </div>
          <div className="flex flex-col w-[45%] items-end justify-between">
            <div className="flex flex-col items-end">
              <p className="widget-text-xs-content">Tested 6 Samples</p>
              <p className="widget-text-gray-xs">Last test 19 Feb 2025</p>
            </div>
            <QuestionMarkIcon size={20} />
          </div>
        </div>
        <div className="bg-[#0E8A4A] rounded-b-xl h-full flex items-center justify-between px-2.5">
          <GradeA />
          <p className="widget-label-grade-text font-semibold">GREAT</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 text-center items-center">
        <p className="text-sm text-gray-600 mb-2">Test the widget on any website:</p>
        <div className="flex gap-4">
          <a
            href={isClient ? `${domain}/widget-demo.html` : "#"}
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            Widget Demo
          </a>
        </div>
      </div>
    </div>
  )
}
