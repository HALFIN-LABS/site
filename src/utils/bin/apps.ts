import Themes from '../../../themes.json';

export const apps = async (
  args: string[],
  callback?: (value: string) => string
): Promise<string> => {
  if (args.length === 0) {
    return `hint: tools [arg]
Args:
  - mac: list of Mac apps
  - ios: List of iOS apps
  
  e.g. 'halfin@halfinlabs.dev:$ ~ apps mac'
  `;
  }

  let result = ''; // declare result variable outside of the switch statement

  switch (args[0]) {
    case 'mac':
      result += '\n\n';
      result += `<a href="#">MacGPT</a> | ChatGPT, in your Mac menu bar`;
      result += '\n\n';
      result += `<a href="#">MacsiBar</a> | The bitcoin price, in your Mac menu bar`;
      break; // add break statement for case 'mac', so it doesn't fall through to case 'ios'

    case 'ios':
      result += '\n\n';
      result += `<a href="#">Mynstr TV</a> | Decentralised video streaming on IPFS and Nostr`;
      result += '\n\n';
      result += `<a href="#">Mynstr Keys</a> | Nostr vanity address generator`;
      break; // add break statement for case 'ios'
      
    default:
      result += `Invalid argument: ${args[0]}`;
      break; // add default case that handles invalid arguments
  }
  
  return result; // return the result after the switch statement has finished
};

