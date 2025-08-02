#!/usr/bin/env node
import { CLIApplication, HelpCommand, ImportCommand, VersionCommand, GenerateCommand } from './cli/index.js';
import 'reflect-metadata';

function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand(),
    new ImportCommand(),
    new GenerateCommand(),
  ]);

  cliApplication.processCommand(process.argv);
}

bootstrap();
