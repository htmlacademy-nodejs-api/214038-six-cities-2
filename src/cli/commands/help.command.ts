import { Command } from './command.interface.js';
import chalk from 'chalk';

export class HelpCommand implements Command {
  public getName(): string {
    return '--help';
  }

  public async execute(..._parameters: string[]): Promise<void> {
    const log = console.log;

    log(chalk.red('Программа для подготовки данных для REST API сервера.'));
    log(chalk.blue('Пример:'));
    log(chalk.green('    cli.js --<command> [--arguments]'));
    log(chalk.blue('Команды:'));
    log(chalk.green('    --version:                   # выводит номер версии'));
    log(chalk.green('    --help:                      # печатает этот текст'));
    log(chalk.green('    --import <path>:             # импортирует данные из TSV'));
    log(chalk.green('    --generate <n> <path> <url>  # генерирует произвольное количество тестовых данных'));
  }
}
