/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Box, BoxInterface } from "../../contracts/Box";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "ValueChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061017e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632e64cec11461003b5780636057361d14610059575b600080fd5b610043610075565b604051610050919061010c565b60405180910390f35b610073600480360381019061006e91906100d4565b61007e565b005b60008054905090565b806000819055507f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c59816040516100b4919061010c565b60405180910390a150565b6000813590506100ce81610131565b92915050565b6000602082840312156100e657600080fd5b60006100f4848285016100bf565b91505092915050565b61010681610127565b82525050565b600060208201905061012160008301846100fd565b92915050565b6000819050919050565b61013a81610127565b811461014557600080fd5b5056fea26469706673582212205e0370ae9b0774d54c7fc67cdecf31ca0220135601f43947fbcd65b2c06b5a0264736f6c63430008040033";

type BoxConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoxConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Box__factory extends ContractFactory {
  constructor(...args: BoxConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Box> {
    return super.deploy(overrides || {}) as Promise<Box>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Box {
    return super.attach(address) as Box;
  }
  override connect(signer: Signer): Box__factory {
    return super.connect(signer) as Box__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoxInterface {
    return new utils.Interface(_abi) as BoxInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Box {
    return new Contract(address, _abi, signerOrProvider) as Box;
  }
}
