# Introdction

A simple command line tool to generate strong passwords.

# Installation

`npm install @pioneiro/password-generator`

# Usage

#### General usage

`genpass [options]`

#### Display help

`genpass --help`
`genpass -h`

#### Generate a random alphanumeric password of length 12

`genpass`

#### Generate a random password of defined length

`genpass <length>`

#### Generate a random password of length 12 consisting alphabets, numbers and symbols

`genpass -symbols`
`genpass -s`

#### Generate a random password of defined length consisting alphabets, numbers and symbols

`genpass <length> -symbols`
`genpass <length> -s`
