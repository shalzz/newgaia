import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FailedStates } from "@/components/failed-states"
import { ParallelStartup } from "@/components/parallel-startup"
import { Web3Infrastructure } from "@/components/web3-infrastructure"
import { DharmicCreativism } from "@/components/dharmic-creativism"

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <FailedStates />
      <ParallelStartup />
      <Web3Infrastructure />
      <DharmicCreativism />
    </main>
  )
}

