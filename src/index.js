import { use } from './IPFS.js'

// (async () => {
//   await use()
// })()

export default async () => {
  await use()

  // Now you can use ipfs globally to do things like

  // const ipfsNode = ipfs // bind the prop to the global
  // const identity = await ipfsNode.id()
  // const nodeId = identity.id
  // console.info('nodeId', nodeId)
}
