# 3. História da Linguagem

- Em 1989, Time Bernes Lee criou a World Wide Web
- Marc Andressen, criado do NCSA Mosaic, lançou o Netscape em 1994
- HyperCard, uma plataforma da Apple, chamou atenção de Andressen
- Brenda Eich foi recrutado em 1995 para escrever uma linguagem de programação para o navegador
- Na ocasião, ele tentou se base na linguagem Scheme, um dialeto de Lisp
- Alguém na Netscape descobriu que Scheme era muito complicado, mas a linguagem precisava ser mais popular e fácil de usar
- Ele implementou a linguagem JavaScript em 10 dias, em maio de 1995, utilizando como base as linguagens Java, Scheme, Self e com algumas influências de Perl.
- Talvez seja por isso que a linguagem JavaScript é tão diferente das outras
- Ela foi batizada de Mocha, mas logo depois teve que mudar de nome
- Meses depois, foi lançada com o nome de LiveScript, no Netscape 2.0
- Naquela época estava acontecendo a guerra dos navegadores
- Em Dezembro, o nome mudou para JavaScript, por causa de um acordo feito com a Sun contra a Microsoft
- O nome JavaScript foi registrado pela Sun e era de uso exclusivo da Netscape
- A Microsoft fez uma engenharia reversa da linguagem, criando o JScript
- Com medo de perder o controle, a Netscape tentou padronizar a linguagem em diversas entidades como a W3C
- Em 1997, a Netscape padronizou a linguagem JavaScript junto a ECMA International, trocando o nome para ECMAScript

```scheme
(define (list-of-sequence n)
	(let loop ((i n)) (res '()))
		(if (< i 0)
			(display res)
      (loop (- i 1) (cons (* i i) res))))
(list-of-sequence 9)
```
