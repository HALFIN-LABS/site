import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands: about, apps, contact, tip, github, \n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  '\n'
  return 'halfin';
};

// export const date = async (args: string[]): Promise<string> => {
//  return new Date().toString();
// };

export const halfin = async (args: string[]): Promise<string> => {
  window.open('https://halfinlabs.dev', '_blank');

  return 'Opening halfinlabs.dev ...';
};

export const contact = async (args: string[]): Promise<string> => {
  window.open('mailto:help@halfinlabs.dev');

  return 'Opening mailbox ...';
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const tip = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
  window.open(packageJson.funding.url, '_blank');
  }, 1000);
'\n'
  return 'Opening tipping url ...';
};

export const start = (args?: string[]): string => {
  return `

  ██   ██  █████  ██      ███████ ██ ███    ██     ██       █████  ██████  ███████ 
  ██   ██ ██   ██ ██      ██      ██ ████   ██     ██      ██   ██ ██   ██ ██      
  ███████ ███████ ██      █████   ██ ██ ██  ██     ██      ███████ ██████  ███████ 
  ██   ██ ██   ██ ██      ██      ██ ██  ██ ██     ██      ██   ██ ██   ██      ██ 
  ██   ██ ██   ██ ███████ ██      ██ ██   ████     ███████ ██   ██ ██████  ███████  v${packageJson.version}   
                  \n
Type 'help' to see list of available commands.
\n
`;
};
