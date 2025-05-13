const perguntasRespostas = [ 
   { 
     pergunta: "Comprei um produto e ele veio com defeito. O que faço?", 
     resposta: "Você tem até 90 dias para reclamar. A loja tem 30 dias para consertar. Se não resolver, você pode exigir troca, abatimento ou devolução do valor." 
   }, 
   { 
     pergunta: "Tenho direito a reembolso em compras online?", 
     resposta: "Sim. Você pode desistir em até 7 dias após o recebimento do produto, mesmo sem motivo, conforme o artigo 49 do CDC." 
   }, 
   { 
     pergunta: "A loja é obrigada a trocar um produto que não gostei?", 
     resposta: "Não. A troca por arrependimento só é obrigatória em compras feitas fora da loja física (online, telefone). Fora isso, depende da política da loja." 
   }, 
   { 
     pergunta: "Recebi uma cobrança indevida. O que fazer?", 
     resposta: "Você pode exigir o valor de volta em dobro, com correção e juros, conforme o artigo 42 do CDC." 
   }, 
   { 
     pergunta: "Qual o prazo para reclamar de um serviço mal feito?", 
     resposta: "Você tem até 90 dias para serviços duráveis (ex: conserto de eletrodoméstico) e 30 dias para serviços não duráveis (ex: corte de cabelo)." 
   }, 
   { 
     pergunta: "Pedi cancelamento de um serviço e continuam cobrando. É legal?", 
     resposta: "Não. A cobrança após o pedido de cancelamento é indevida e deve ser contestada imediatamente." 
   }, 
   { 
     pergunta: "Fiz uma compra e o produto não chegou. O que posso fazer?", 
     resposta: "Você pode exigir a entrega imediata, outro produto equivalente ou cancelamento da compra com reembolso total." 
   }, 
   { 
     pergunta: "A empresa pode mudar o preço depois que já comprei?", 
     resposta: "Não. Se você já finalizou a compra, o preço combinado deve ser mantido, mesmo que tenha sido um erro da loja." 
   }, 
   { 
     pergunta: "A loja pode se recusar a aceitar devolução de produto com defeito?", 
     resposta: "Não. Se o produto tiver defeito, a loja é obrigada a reparar, trocar ou reembolsar conforme o CDC." 
   }, 
   { 
     pergunta: "Comprei um produto na promoção. Tenho os mesmos direitos?", 
     resposta: "Sim. Produtos em promoção também têm garantia e devem funcionar perfeitamente. Só não vale para defeitos já informados na hora da compra." 
   }, 
   { 
     pergunta: "Empresas podem cobrar multa por cancelamento?", 
     resposta: "Podem, desde que a multa seja razoável e proporcional. Em serviços contínuos (como TV e internet), o consumidor pode cancelar a qualquer momento." 
   }, 
   { 
     pergunta: "Posso cancelar um plano de celular antes do prazo de fidelidade?", 
     resposta: "Sim, mas pode haver multa proporcional ao tempo restante. A operadora deve informar esse valor com clareza." 
   }, 
   { 
     pergunta: "Qual o prazo de garantia legal de produtos?", 
     resposta: "30 dias para produtos não duráveis (alimentos) e 90 dias para duráveis (eletrodomésticos). Garantias contratuais são adicionais." 
   }, 
   { 
     pergunta: "Posso exigir nota fiscal da loja?", 
     resposta: "Sim. Emitir nota fiscal é obrigatório. A recusa pode ser denunciada à Receita Federal e ao Procon." 
   }, 
   { 
     pergunta: "Empresa pode se negar a vender porque não tenho CPF na nota?", 
     resposta: "Não. O CPF só pode ser exigido quando houver obrigatoriedade legal, como em compras com garantia estendida ou emissão de cupom fiscal eletrônico." 
   }, 
   { 
     pergunta: "Posso devolver um presente que ganhei?", 
     resposta: "Depende da política da loja. Se tiver defeito, vale o direito do consumidor, mesmo sem nota fiscal (desde que comprove a compra)." 
   }, 
   { 
     pergunta: "Posso ser obrigado a pagar por serviço que não pedi?", 
     resposta: "Não. Cobrança por serviço não solicitado é prática abusiva e deve ser cancelada." 
   }, 
   { 
     pergunta: "O que é venda casada?", 
     resposta: "É quando a empresa obriga você a comprar um produto ou serviço junto de outro. É proibido pelo CDC (ex: comprar seguro para financiar)." 
   }, 
   { 
     pergunta: "A loja pode limitar o valor da compra no cartão?", 
     resposta: "Pode, desde que avise claramente ao consumidor antes da compra. Mas não pode diferenciar preço entre formas de pagamento sem aviso." 
   }, 
   { 
     pergunta: "Empresa pode demorar para estornar compra no cartão?", 
     resposta: "O estorno deve ser feito na fatura seguinte ou, no máximo, em até 2 faturas. Atrasos são abusivos." 
   } 
 ];

const modelosReclamacao = {
    defeito: `Prezados,
  
  Comprei um produto no dia __/__/____ e, após o uso, constatei um defeito que compromete sua funcionalidade. Conforme o Código de Defesa do Consumidor (CDC), artigo 18, solicito a solução do problema dentro do prazo legal de 30 dias.
  
  Caso não haja reparo adequado, requeiro a substituição do produto, o abatimento proporcional do preço ou a devolução do valor pago.
  
  Aguardo uma solução imediata.
  
  Atenciosamente,
  [Seu nome]`,
  
    atrasoEntrega: `Prezados,
  
  Realizei uma compra no dia __/__/____, com previsão de entrega para __/__/____. No entanto, até o momento, o produto não foi entregue.
  
  Peço providências imediatas, conforme os artigos 30 e 35 do CDC. Caso o produto não seja entregue no prazo máximo de 7 dias, solicitarei o cancelamento da compra com devolução integral do valor pago.
  
  Aguardo retorno.
  
  Atenciosamente,
  [Seu nome]`,
  
    reembolso: `Prezados,
  
  Solicito o reembolso de uma compra realizada no dia __/__/____, conforme meu direito de arrependimento garantido pelo artigo 49 do Código de Defesa do Consumidor. 
   
  A compra foi feita fora do estabelecimento físico (online/telefone), e estou exercendo o direito de cancelamento dentro do prazo de 7 dias corridos. 
   
  Solicito a devolução integral do valor pago. 
   
  Atenciosamente, 
  [Seu nome]

`,
  
    cobrancaIndevida: `Prezados,
  
  Verifiquei em minha fatura uma cobrança que não reconheço, referente a [descrever o item/serviço], no valor de R$____.
  
  Conforme o artigo 42, parágrafo único, do CDC, solicito o cancelamento da cobrança e a devolução em dobro do valor pago, com correção monetária.
  
  Aguardo providências urgentes.
  
  Atenciosamente,
  [Seu nome]`,
  
    cancelamentoServico: `Prezados,
  
  Solicitei o cancelamento do serviço [nome do serviço] no dia __/__/____, mas continuam sendo feitas cobranças após esta data.
  
  Informo que a cobrança posterior ao cancelamento é indevida, conforme o Código de Defesa do Consumidor, e deve ser imediatamente interrompida. Solicito também o estorno dos valores pagos indevidamente.
  
  Atenciosamente,
  [Seu nome]`,
  
    vendaCasada: `Prezados,
  
  Durante a contratação do serviço/produto [descrever], fui informado de que era obrigatório adquirir também [outro item/serviço].
  
  Essa prática configura **venda casada**, proibida pelo artigo 39, inciso I, do CDC. Solicito a regularização da situação e o cancelamento da cobrança adicional indevida.
  
  Aguardo providências.
  
  Atenciosamente,
  [Seu nome]`
  };
  
  