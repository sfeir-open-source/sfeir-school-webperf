<!-- .slide: class="two-column with-code columns-60-40" -->

# Protocole HTTP

## HTTP/1.1 - 1997

😍 Avancées :

- <strong>Connexions persistantes :</strong> Plusieurs requêtes sur une connexion TCP (keep-alive)
<!-- - <strong>Pipelining :</strong> Envoi de plusieurs requêtes sans attendre la réponse précédente -->
- <strong>Compression :</strong> Support de gzip/deflate
- <strong>Chunks :</strong> Streaming de ressources

<div>

😭 Limitations :

- <strong>"Head-of-Line Blocking" :</strong> Une requête lente bloque les suivantes
- Les navigateurs ont une limite de connexions TCP (6 sur Chrome)

</div>
<!-- .element: class="fragment" data-fragment-index="1"-->

##--##

<img src="./assets/images/03-speed/http1.1.svg" style="width: 500px; height: auto; display: block" />
