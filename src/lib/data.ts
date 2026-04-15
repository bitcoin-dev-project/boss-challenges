import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    members: [
      {
        username: "panon-btc",
        avatarUrl: "https://avatars.githubusercontent.com/panon-btc",
      },
    ],
    description:
      "Cory: A local-first bitcoin transaction ancestry explorer and BIP-329 label editor. Cory helps you inspect where a Bitcoin transaction's funds came from, interactively, on your own machine.",
    repoUrl: "https://github.com/panon-btc/cory",
  },
  {
    id: "2",
    members: [
      {
        username: "aizuanjeme",
        avatarUrl: "https://avatars.githubusercontent.com/aizuanjeme",
      },
    ],
    description:
      "Bitcoin transaction history explorer with visual graph tracing, wallet fingerprint detection, and BIP-329 label management.",
    repoUrl: "https://github.com/aizuanjeme/know-your-coin-history",
  },
  {
    id: "3",
    members: [
      {
        username: "razorbest",
        avatarUrl: "https://avatars.githubusercontent.com/RazorBest",
      },
    ],
    description: "Traffic analysis of post-BIP324 P2P Bitcoin traffic. Designed to figure out if P2P Bitcoin encrypted traffic is detectable by ISPs.",
    repoUrl: "https://github.com/RazorBest/bip324-traffic-analysis",
  },
  {
    id: "4",
    members: [
      {
        username: "Arowolokehinde",
        avatarUrl: "https://avatars.githubusercontent.com/Arowolokehinde",
      },
    ],
    description: "Research project around Bitcoin's encrypted P2P protocol (BIP-324). This report investigates whether a passive network adversary — such as an Internet Service Provider (ISP) or a BGP-hijacking attacker positioned on the network path — can determine the timing of specific Bitcoin P2P protocol events from encrypted traffic metadata alone.",
    repoUrl: "https://github.com/Arowolokehinde/bip324-traffic-analysis-research",
  },
  {
    id: "5",
    members: [
      {
        username: "Hamza1610",
        avatarUrl: "https://avatars.githubusercontent.com/Hamza1610",
      },
    ],
    description:
      "Interactive visual tool that lets users create and observe real blockchain forks/reorgs on test networks.",
    repoUrl: "https://github.com/Hamza1610/bitcoin_block_weave",
  },
  {
    id: "6",
    members: [
      {
        username: "harismuzaffer",
        avatarUrl: "https://avatars.githubusercontent.com/harismuzaffer",
      },
      { username: "SIDHARTH20K4",
        avatarUrl: "https://avatars.githubusercontent.com/SIDHARTH20K4",
      },
    ],
    description:
      "Contributions to ddust, a new tool by bubb1es71 that finds and safely removes dust attack UTXOs from a wallet. ddust creates small, low-fee, stand-alone transactions that spend dust UTXOs to an OP_RETURN output, preventing dust from accidentally being spent with other wallet UTXOs.",
    repoUrl: "https://github.com/bubb1es71/ddust",
  },
  {
    id: "7",
    members: [
      {
        username: "8144225309",
        avatarUrl: "https://avatars.githubusercontent.com/8144225309",
      },
    ],
    description:
      "The first implementation of SuperScalar, a new kind of lightning channel factory that can more easily scale LN and provide cooperative LSP services with no bitcoin softfork needed.",
    repoUrl: "https://github.com/8144225309/SuperScalar",
  },
  {
    id: "8",
    members: [
      {
        username: "TechLateef",
        avatarUrl: "https://avatars.githubusercontent.com/TechLateef",
      },
    ],
    description: "PSBTv2 + BIP375 implementation in Golang.",
    repoUrl: "https://github.com/TechLateef/psbt",
  },
  {
    id: "9",
    members: [
      {
        username: "Ugarba202",
        avatarUrl: "https://avatars.githubusercontent.com/Ugarba202",
      },
    ],
    description:
      "Rust library and CLI tool that analyzes a bitcoin wallet's UTXO set and evaluates whether the wallet is safe for operating a Lightning node. This tool acts as a Lightning wallet diagnostics engine and performs several anaylses like wallet liquidity analysis, channel funding strategy reccommendations, and UTXO fragmentation detection.",
    repoUrl: "https://github.com/Ugarba202/Lightning-UTXO-Anchor-Manager",
  },
  {
    id: "10",
    members: [
      {
        username: "noahjoeris",
        avatarUrl: "https://avatars.githubusercontent.com/noahjoeris",
      },
    ],
    description: "Tool for exploring forks, tip divergence, and reorg behavior across multiple node backends.",
    repoUrl: "https://github.com/noahjoeris/reorg-playground",
  },
  {
    id: "11",
    members: [
      {
        username: "iamthesvn",
        avatarUrl: "https://avatars.githubusercontent.com/iamthesvn",
      },
    ],
    description:
      "A transaction anchor fee-bumping service, payable via Lightning Network.",
    repoUrl: "https://github.com/iamthesvn/feebumper",
  },
  {
    id: "12",
    members: [
      {
        username: "SusanGithaigaN",
        avatarUrl: "https://avatars.githubusercontent.com/SusanGithaigaN",
      },
    ],
    description:
      "Fee bumping service that helps Lightning users get stuck commitment transactions confirmed. Uses anchor outputs and CPFP.",
    repoUrl: "https://github.com/SusanGithaigaN/lightning-anchor-fee-outputs",
  },
  {
    id: "13",
    members: [
      {
        username: "UfiairENE",
        avatarUrl: "https://avatars.githubusercontent.com/UfiairENE",
      },
      {
        username: "vivcis",
        avatarUrl: "https://avatars.githubusercontent.com/vivcis",
      },
    ],
    description:
      "CLI tool that identifies dust attack UTXOs and safely removes them before they can be used to deanonymize you.",
    repoUrl: "https://github.com/UfiairENE/bitcoin-utxo-observatory",
  },
  {
    id: "14",
    members: [
      {
        username: "nkatha23",
        avatarUrl: "https://avatars.githubusercontent.com/nkatha23",
      },
    ],
    description:
      "Know Your Coin History: Transaction graph explorer that lets you trace where your coins came from. Load a transaction or UTXO, recursively trace its ancestry, attach labels, detect wallet fingerprinting heuristics, and export everything in the BIP-329 wallet label standard — all against your own local Bitcoin Core node or Electrum server.",
    repoUrl: "https://github.com/nkatha23/knowyourcoinhistory",
  },
  {
    id: "15",
    members: [
      {
        username: "diegobianqui",
        avatarUrl: "https://avatars.githubusercontent.com/diegobianqui",
      },
      {
        username: "ToRyVand",
        avatarUrl: "https://avatars.githubusercontent.com/ToRyVand",
      },
      {
        username: "0xbrito",
        avatarUrl: "https://avatars.githubusercontent.com/0xbrito",
      },
      {
        username: "Nacho"
      }
    ],
    description:
      "A passive observability platform for the Lightning Network gossip layer. Ingests raw BOLT 7 gossip snapshots and produces an interactive intelligence dashboard for analyzing message propagation, peer behavior, and network-level privacy exposure. Built on top of jharveyb's gossip_observer. Finalist and honorable mention at BTC++ Exploits Edition hackathon (February 2026). ",
    repoUrl: "https://github.com/bitcoin-visuals/LN_gossip_observer_visuals",
  },
  {
    id: "16",
    members: [
      {
        username: "Miracle656",
        avatarUrl: "https://avatars.githubusercontent.com/Miracle656",
      },
    ],
    description:
      "Real-time, interactive tool for visualizing and modeling blockchain forks and reorganizations on a local bitcoin Regtest network.",
    repoUrl: "https://github.com/Miracle656/Visual-Fork-Creator-Bitcoin-Regtest-",
  },
  {
    id: "17",
    members: [
      {
        username: "ValeraFinebits",
        avatarUrl: "https://avatars.githubusercontent.com/ValeraFinebits",
      },
    ],
    description: "Async Payjoin (BIP-77) plugin for BTCPayServer",
    repoUrl: "https://github.com/ValeraFinebits/btcpayserver-payjoin-plugin",
  },
  {
    id: "18",
    members: [
      {
        username: "GuiSchet",
        avatarUrl: "https://avatars.githubusercontent.com/GuiSchet",
      },
    ],
    description:
      "A peer-observer tool that subscribes to NATS events and emits alerts to stdout when anomalous peer behavior is detected.",
    repoUrl: "https://github.com/GuiSchet/peer-observer/tree/alerts-tool/tools/alerts",
  },
  {
    id: "19",
    members: [
      {
        username: "GuiSchet",
        avatarUrl: "https://avatars.githubusercontent.com/GuiSchet",
      },
      {
        username: "f3r10"
      },
    ],
    description:
      "Real-time dashboard for analyzing and monitoring a Bitcoin Core node's P2P network activity. It combines beautiful, responsive visual components with an integrated AI assistant to help users understand what is happening under the hood of a bitcoin node. Third place winner for the BTC++ Exploits Edition hackathon (February 2026)",
    repoUrl: "https://github.com/GUiSchet/c12d",
  },
  {
    id: "20",
    members: [
      {
        username: "vittoridavide",
        avatarUrl: "https://avatars.githubusercontent.com/vittoridavide",
      },
    ],
    description:
      "Provenance: Local-first analysis tool for people and businesses that need to trace the history of coins through their transaction ancestry. Supports classifying and labeling UTXOs or transactions, and allows BIP-329 and CSV exports.",
    repoUrl: "https://github.com/vittoridavide/provenance-btc",
  },
  {
    id: "21",
    members: [
      {
        username: "charlesoma",
        avatarUrl: "https://avatars.githubusercontent.com/charlesoma",
      },
    ],
    description: "CLI tool for detecting and cleaning dust UTXOs using PSBT workflows.",
    repoUrl: "https://github.com/charlesoma/dustcleaner",
  },
  {
    id: "22",
    members: [
      {
        username: "1estart",
        avatarUrl: "https://avatars.githubusercontent.com/1estart",
      },
    ],
    description: "Dust Sweeper: Scans a wallet for dust UTXOs and creates a PSBT to consolidate or burn them. Guides the user through review, signing with a BDK wallet, verification, and broadcast.",
    repoUrl: "https://github.com/1estart/dust_sweeper",
  },
  {
    id: "23",
    members: [
      {
        username: "Smartcoder05",
        avatarUrl: "https://avatars.githubusercontent.com/Smartcoder05",
      },
    ],
    description: "Composable Rust library for parsing, building, and resolving Bitcoin payment URIs (BIP-321). Supports silent payments, payjoin, and lightning.",
    repoUrl: "https://github.com/Smartcoder05/BIP321-Suite",
  },
  {
    id: "24",
    members: [
      {
        username: "Jesusbrito04",
        avatarUrl: "https://avatars.githubusercontent.com/Jesusbrito04",
      },
    ],
    description: "BIP-321 (Bitcoin URI) parser written in Rust. Designed to be the backbone of modern wallets that need to support not just simple on-chain payments, but also payjoin, silent payments, lightning, and beyond.",
    repoUrl: "https://github.com/Jesusbrito04/bitcoin-uri-composable",
  },
  {
    id: "25",
    members: [
      {
        username: "crywolf",
        avatarUrl: "https://avatars.githubusercontent.com/crywolf",
      },
    ],
    description: "Fountainhead: Fountain coded blocks for useful bitcoin blockchain pruning. Allows nodes to prune data, yet still assist in initial block download for new nodes. Based on fountain codes, a class of erasure codes, that enable any full node to encode validated blocks into a small number of coded blocks, thereby reducing storage costs.",
    repoUrl: "https://github.com/crywolf/fountainhead",
  },
  {
    id: "26",
    members: [
      {
        username: "diegobianqui",
        avatarUrl: "https://avatars.githubusercontent.com/diegobianqui",
      },
    ],
    description: "BINST (Bitcoin Institutions) Protocol and Web App: Pilot project deployed on testnet4 that demonstrates how complex entities can be registered, owned, and controlled on bitcoin.",
    repoUrl: "https://bitcoin-institutions.github.io/binst-pilot-docs/introduction.html",
  },
  {
    id: "27",
    members: [
      {
        username: "xyzconstant",
        avatarUrl: "https://avatars.githubusercontent.com/xyzconstant",
      },
    ],
    description: "IPC extractor for peer-observer",
    repoUrl: "https://github.com/peer-observer/peer-observer/pull/379",
  },
  {
    id: "28",
    members: [
      {
        username: "pruks-dev",
        avatarUrl: "https://avatars.githubusercontent.com/pruks-dev",
      },
    ],
    description: "Point of Sale system that enables merchants to receive fiat payments for bitcoin transactions via peer-to-peer matching offers.",
    repoUrl: "https://github.com/pruks-dev/lnwPOS",
  },
  {
    id: "29",
    members: [
      {
        username: "otaliptus",
        avatarUrl: "https://avatars.githubusercontent.com/otaliptus",
      },
    ],
    description: "Interactive React/Vite playground for exploring PSBT v0 and v2 flows.",
    repoUrl: "https://github.com/otaliptus/psbt-playground",
  },
  {
    id: "30",
    members: [
      {
        username: "otaliptus",
        avatarUrl: "https://avatars.githubusercontent.com/otaliptus",
      },
    ],
    description: "Go implementation of psbt-v2 (BIP-370) for btcd.",
    repoUrl: "https://github.com/otaliptus/psbt-v2",
  },
  {
    id: "30",
    members: [
      {
        username: "aaron-recompile",
        avatarUrl: "https://avatars.githubusercontent.com/aaron-recompile",
      },
    ],
    description: "RootScope: Taproot script-path analyzer with witness fetch, Merkle proof reconstruction, and address verification.",
    repoUrl: "https://github.com/aaron-recompile/rootscope",
  },
  {
    id: "31",
    members: [
      {
        username: "aaron-recompile",
        avatarUrl: "https://avatars.githubusercontent.com/aaron-recompile",
      },
    ],
    description: "Eltoo State Chain on Signet (APO + CTV)",
    repoUrl: "https://delvingbitcoin.org/t/eltoo-state-chain-on-signet-three-rounds-six-transactions-apo-ctv/2413",
  },
  {
    id: "32",
    members: [
      {
        username: "gboigwe",
        avatarUrl: "https://avatars.githubusercontent.com/gboigwe",
      },
    ],
    description: "A visual chain, reorg, and fork creator for Regtest and Signet based on 0xB10C's visual chain/reorg project. Helps visualize how bitcoin's block tree works, mining blocks, seeing forks form, and understanding reorgs.",
    repoUrl: "https://github.com/gboigwe/orphan-chain-explorer",
  },
  {
    id: "33",
    members: [
      {
        username: "purszki",
        avatarUrl: "https://avatars.githubusercontent.com/purszki",
      },
    ],
    description: "Light client block filter research. Benchmarking BIP 158 against Binary Fuse filters, with reproducible datasets, wallet scenarios, and ground-truth validation on real mainnet data. Now with ARM results from a Raspberry Pi 5.",
    repoUrl: "https://purszki.github.io/bitcoin_research_01/",
  },
  {
    id: "34",
    members: [
      {
        username: "pzafonte",
        avatarUrl: "https://avatars.githubusercontent.com/pzafonte",
      },
    ],
    description: "node-bench: Node-agnostic high-level performance benchmark harness. Measures Initial Block Download (IBD) throughput, across commits, giving you a longitudinal record of sync performance.",
    repoUrl: "https://github.com/pzafonte/node-bench",
  },
];
