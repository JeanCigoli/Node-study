## Configuração do GIT

Primeiro rodamos esse comando para falar que vamos editar o arquivo de configuração pelo visual code

> git config --global core.editor code

Assim executando o edit para abrir as configurações

> git config --global --edit

**Exemplo:**

``` json

[user]
	email = jean@primi.com.br
	name = jeancigoli
[core]
	editor = code --wait
[alias]
	s = !git status -status
	c = !git add --all && git commit -m
	l = !git log --pretty=format:'%C(blue) %h %C(red) %d %C(white) %s - %C(cyan) %cn, %C(green) %cr'

```
