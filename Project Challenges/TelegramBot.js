var TelegramBot = require('node-telegram-bot-api')
var token = 'insira seu token aqui!';
var bot = new TelegramBot(token, {polling:true})

bot.onText(/\/start/, (message) => {
    bot.sendMessage(message.chat.id, "Olá! Seja bem vindo ao atendimento virtual do Banco Carrefour!\n\n Sobre qual assunto seria sua dúvida? Basta clicar nos botões abaixo em seu teclado. \n\n Você pode voltar a qualquer momento para o menu inicial, basta apenas digitar /start.", {
        "reply_markup": {
            "keyboard": [["/Cartão","/Seguros","/Serviços","/Promoções"]]
        }
    });
});

// Todas as opções para o comando Cartão
bot.onText(/\/Cartão/, (message) => {
    bot.sendMessage(message.chat.id, "O cartão de crédito Carrefour é aceito em todos os locais credenciados Visa e Mastercard, dentrou ou fora do país. Tendo como benefícios exclusivos: \n\n Produtos com descontos exclusivos nas Lojas Carrefour e no site; \n Produtos sinalizados com o selo de primeira parcela paga; \n Produtos sinalizados nas Lojas Carrefour ou no site podem ser parcelados em até 24x sem juros;\n Parcelamento em até 10x sem juros nas Drogarias Carrefour; \n Prazo maior para pagar o combustível nos postos Carrefour;\n\n Agora que já conhece um pouquinho mais sobre o Cartão Carrefour, o que gostaria de fazer? \n", {
        "reply_markup": {
            "keyboard": [["/Vantagens do Cartão Carrefour"],["/Quero o meu cartão"],["/Desbloquear Cartão"],["/Aplicativo Carrefour"]]
        }
    })
});

bot.onText(/\/Vantagens do Cartão Carrefour/, (message) => {
    bot.sendMessage(message.chat.id, "As vantagens do Cartão Carrefour são:\n\n Isenção da parcela da anuidade usando pelo menos uma vez por mês, em qualquer Carrefour;\n Controle de transações por SMS, mediante contratação de serviço;\n Até 14 opções de data de vencimento;\n Prazo maior para pagar, utilizando a melhor data de compra;\n Até 04 cartões adicionais gratuitos;\n Saque rápido na Rede 24Horas e Rede Cirrus/Plus; \n Pagamento da fatura em qualquer Banco; \n Limite liberado na hora, ao pagar a fatura nos caixas da Loja Carrefour;\n Contrate o Crédito Pessoal em nossa Central de Relacionamento e tenha dinheiro na sua conta em até 72 horas, consulte condições")
});

bot.onText(/\/Quero o meu cartão/, (message) => {
    bot.sendMessage(message.chat.id, "Para adquirir seu Cartão Carrefour, basta seguir estes passos:\n\n 1.Solicite: peça já o seu cartão indo até a Loja Carrefour mais próxima, ou através do site Carrefour Soluções que você pode acessar clicando no link a seguir: https://www.carrefoursolucoes.com.br/ \n 2. Receba seu cartão em casa ou saia com ele direto da loja. Consulte as lojas com esta disponibilidade \n 3. Desbloqueie através dos canais Carrefour disponibilizados \n 4. Aproveite usando o cartão e assim tendo acesso a benefícios e serviços exclusivos para você! \n")
});

bot.onText(/\/Desbloquear Cartão/, (message) => {
    bot.sendMessage(message.chat.id, "Você pode desbloquear seu cartão através de:\n\n 1. Terminais de Serviço (TAS): presentes em todas as lojas Carrefour; \n 2. Central de Atendimento: para regiões metropolitanas ligue 4004 6200, e para demais regiões, ligue 0800 709 6200 \n 3. App Cartão Carrefour: baixe o aplicativo e aproveite as facilidades!\n")
});

bot.onText(/\/Aplicativo Carrefour/, (message) => {
    bot.sendMessage(message.chat.id, "Através do aplicativo você pode consultar suas compras, limites, os melhores dias para realizar suas compras e acessar sua fatura. Disponível na Google Play (https://play.google.com/store/apps/details?id=br.com.carrefour.cartaocarrefour) e App Store (https://apps.apple.com/br/app/cart%C3%A3o-carrefour/id1156553924) \n")
});

//Todas as opções para o comando Seguros
bot.onText(/\/Seguros/, (message) => {
    bot.sendMessage(message.chat.id, "olá", {
        "reply_markup": {
            "keyboard": [["/Proteção Hospitalar"],["/Sorte Grande"],["/Proteção Dental"],["/Seguro Premiado"],["/Lar Seguro"],["/Parcele Fácil"],["/Crédito Pessoal"],["/Fatura Premiada"]]
        }
    })
});

bot.onText(/\/Proteção Hospitalar/, (message) => {
    bot.sendMessage(message.chat.id, "Você não precisa esperar os problemas de saúde acontecerem para se proteger. Ao adquirir o Proteção Hospitalar pelo seu Cartão Carrefour, você garante dinheiro no bolso enquanto estiver hospitalizado.\n\n Em caso de internação (por acidente ou doença) você recebe diárias de até R$ 300 por internação hospitalar. Independente de você ter ou não plano de saúde, o dinheiro da indenização é pago diretamente a você.\n\n O Proteção Hospitalar inclui ainda uma Assistência Funeral, com prestação de serviços de até R$ 3.300,00. Por mais R$ 1,00, estenda a cobertura para toda sua família.\n\n Caso queira saber mais sobre os planos disponíveis e seu valor, acesse o site através deste link: https://www.carrefoursolucoes.com.br/web/guest/seguros/hospitalar'")
});

bot.onText(/\/Sorte Grande/, (message) => {
    bot.sendMessage(message.chat.id, "Não é todo mundo que gosta de pensar nisso, mas planejamento pode ser a segurança da sua família em momentos difíceis. O nosso auxílio funeral traz essa tranquilidade com a garantia da cobertura de despesas em caso de morte acidental do titular. Para saber mais acesse este link que te levará direto à página sobre este tópico: https://www.carrefoursolucoes.com.br/web/guest/seguros/sorte-grande")
});

bot.onText(/\/Proteção Dental/, (message) => {
    bot.sendMessage(message.chat.id, "O Proteção Dental Carrefour é a assistência odontológica que os seus dentes precisam. Os nossos serviços incluem emergências, limpezas, extrações, restaurações, raios-x, tratamentos de canal, tratamentos de gengiva e até instalação de aparelhos ortodônticos. Para saber mais, acesse o link que o direcionará à página: https://www.carrefoursolucoes.com.br/web/guest/seguros/dental")
});

bot.onText(/\/Seguro Premiado/, (message) => {
    bot.sendMessage(message.chat.id, "Com o Seguraço Premiado você garante a segurança do seu Cartão Carrefour e evita despesas feitas indevidamente, como saque e compras sob coação e roubo em caixa eletrônico. Em todos esses casos, garantimos o pagamento das suas perdas.\n\n Se você sofrer roubo ou furto qualificado de bolsa ou carteira, que contenha o cartão segurado, além dos pagamento das suas despesas, oferecemos também assistência com suporte com táxi até a sua residência ou até a delegacia; o cancelamento e remissão dos cartões roubados ou furtados; e a notificação de perda, roubo ou furto do seu aparelho celular.\n\n Para saber mais, acesse o link que o levará diretamente à página: https://www.carrefoursolucoes.com.br/web/guest/seguros/seguraco-premiado")
});

bot.onText(/\/Lar Seguro/, (message) => {
    bot.sendMessage(message.chat.id, "Lar Seguro é o seguro que ajuda você a resolver danos e imprevistos em sua casa ou apartamento. Com ele, sua residência fica protegida contra diversos riscos, além de estar coberta por assistências que vão tornar sua vida mais prática e tranquila.\n\n Para contratar o Lar Seguro você não precisa ser dono do imóvel. Basta que seja um imóvel residencial em área urbana, ocupado e construído em alvenaria. E se o imóvel for uma casa, podemos oferecer limpeza de caixa da água com mão de obra especializada.\n\n Caso deseje contratar mais um Lar Seguro para um imóvel diferente do seu endereço cadastral, você poderá entrar em contato com nossa central de atendimento, ou ir ao Carrefour Hiper mais próximo.\n\n Para saber mais sobre este benefício, acesse: https://www.carrefoursolucoes.com.br/web/guest/seguros/lar-seguro")
});

bot.onText(/\/Parcele Fácil/, (message) => {
    bot.sendMessage(message.chat.id, "Em casos de desemprego involuntário ou de incapacidade física total temporária, o seguro garante o pagamento do saldo devedor do financiamento da fatura contratado através da adesão ao Parcele Fácil. \n\n Confira as coberturas e limites máximos de indenizações abaixo.\n\n Consulte Condições Gerais do Seguro Parcele Fácil em www.bnpparibascardif.com.\n\n Para mais informações, acesse: https://www.carrefoursolucoes.com.br/web/guest/seguros/parcele-facil1")
});

bot.onText(/\/Crédito Pessoal/, (message) => {
    bot.sendMessage(message.chat.id, "Em casos de desemprego involuntário ou de incapacidade física total temporária, o seguro garante o pagamento do saldo devedor* do empréstimo contratado através da adesão ao Crédito Pessoal nas situações listadas abaixo.\n\n Acesse para saber mais: https://www.carrefoursolucoes.com.br/web/guest/seguros/credito-pessoal1")
});

bot.onText(/\/Fatura Premiada/, (message) => {
    bot.sendMessage(message,chat.id, "O seguro Fatura Premiada é a tranquilidade que faltava pro seu dia. Em casos de desemprego involuntário ou de incapacidade física total e temporária, o seguro garante o pagamento do saldo devedor do seu Cartão Carrefour até o limite de R$ 5.000,00. Além disso, você ainda concorre a R$ 10.000,00 líquido, em sorteios mensais.\n\n Para saber mais, acesse: https://www.carrefoursolucoes.com.br/web/guest/fatura-premiada")
});

//Todas as opções para o comando Serviços
bot.onText(/\/Serviços/, (message) => {
    bot.sendMessage(message.chat.id, "Sobre qual serviço você tem dúvida?", {
        "reply_markup": {
            "keyboard": [["/Parcele Fácil"],["/Crédito Pessoal"],["/PagContas"],["/Saque Rápido"],["/SMS Controle Total"],["/Parcela Pronta"]]
        }
    })
});

bot.onText(/\/Parcele Fácil/, (message) => {
    bot.sendMessage(message.chat.id, "Ao parcelar a sua fatura, você sabe exatamente quanto vai pagar no próximo mês e por quanto tempo terá que pagar. Assim, fica mais fácil deixar suas contas em dia. \n\n Para parcelamento de fatura e terminal de autoatendimento, siga o seguinte procedimento:\n\n 1. Escolha uma das 8 opções de parcelamento disponíveis; \n 2. Pague o valor exato da entrada em um banco, lotérica ou em uma de nossas lojas até a data de vencimento; \n 3. Pronto! Parcelamento contratado! \n\n Agora se for através de site ou central de atendimento, siga estas instruções:\n\n 1. Simule a opção de parcelamento ideal para você. Caso as opções predefinidas não atendam a sua necessidade, você pode simular até chegar à melhor opção. \n 2. Confirme a contratação do parcelamento \n 3. Se optar pelo plano com entrada, pague exatamente o valor escolhido em um banco, lotérica ou em nossas lojas até a data de vencimento. \n 4. Pronto! Parcelamento contratado! \n\n Para mais informações, acesse: https://www.carrefoursolucoes.com.br/web/guest/servicos/parcele")
});

bot.onText(/\/Crédito Pessoal/, (message) => {
    bot.sendMessage(message.chat.id, "O crédito pessoal funciona como um empréstimo depositado direto em conta corrente ou poupança. \n\n Se você precisar de uma quantia adicional na hora de pagar as contas vencidas, acertar pendências ou turbinar o seu negócio, o Carrefour Soluções Financeiras facilita a sua vida com o Crédito Pessoal. \n\n Coloque os seus projetos emprática, sem burocracia, com uma das taxas mais competitivas do mercado. E você tem até 24 vezes para pagar o empréstimo. \n\n Entre em contato com a nossa Central de Relacionamento, conheça todas as nossas condições especiais e saiba se você é um cliente pré- aprovado para adquirir o serviço de Crédito Pessoal. \n\n Veja como é fácil ter crédito direto na sua conta:\n\n 1. Ligue para a central de relacionamento: O telefone é 4004-6200 para regiões metropolitanas ou 0800-709-6200 em demais localidades. O serviço funciona de segunda a sábado, exceto feriados, das 8h às 21h (horário de Brasília). \n 2. Contrate o valor total ou parte do valor: Com os benefícios do cartão de crédito Carrefour, você pode parcelar o valor contratado em até 24 vezes. \n 3. O dinheiro é depositado na sua conta: O crédito é depositado na sua conta corrente ou poupança em até 72 horas úteis. \n 4. Crédito pessoal contratado com sucesso!\n\n O valor da sua parcela é lançado todo mês na fatura do seu Cartão de crédito Carrefour.\n\n Para saber mais, acesse: https://www.carrefoursolucoes.com.br/credito-pessoal")
});

bot.onText(/\/PagContas/, (message) => {
    bot.sendMessage(message.chat.id, "Com o cartão de crédito Carrefour, você pode pagar diversos tipos de contas em uma única data de vencimento. Como contas de água, luz, gás e de telefone.\n\n Para mais informações, acesse: https://www.carrefoursolucoes.com.br/servicos/pag-contas")
});

bot.onText(/\/Saque Rápido/, (message) => {
    bot.sendMessade(message.chat.id, "Com o cartão de crédito Carrefour, você aproveita da comodidade de sacar dinheiro em caixas eletrônicos da rede Banco 24 Horas, com condições especiais de pagamento. \n\n Saque dinheiro à vista a qualquer hora e tenha um prazo maior para pagar. \n\n Parcele o pagamento do seu saque em até 24 vezes e pague a primeira parcela em até 70 dias. \n\n Confira as Condições para este serviço:\n\n 1. O limite de saque está condicionado à análise de crédito e ao limite de compras disponível no cartão. \n 2. Os saques estão disponíveis no Brasil ou no exterior.\n\n As operações no exterior, para clientes MasterCard ocorre via Rede Cirrus e, para clientes Visa, com a Rede Plus. \n\n Para mais informações, acesse: https://www.carrefoursolucoes.com.br/servicos/saque-rapido")
});

bot.onText(/\/SMS Controle Total/, (message) => {
    bot.sendMessage(message.chat.id, "Acompanhe a movimentação do seu cartão de crédito Carrefour, ao receber um SMS, no seu celular, a cada transação efetuada. Assim, você tem segurança e controle de suas compras e dos seus adicionais.\n\n Quais as vantagens do SMS controle? om este serviço, você recebe mensagens com as principais informações sobre:\n\n 1. Seus gastos: Transações de compras aprovadas em território nacional. \n 2. Saques em dinheiro: Valor, hora e local que a transação foi realizada. \n 3. PagContas: Transações de pagamentos efetuados. \n 4. Fechamento e pagamento de fatura: Informativo com o valor e data de vencimento da fatura, além da confirmação da efetivação do pagamento.\n\n Onde contratar? Para começar a receber mensagens via SMS, basta cadastrar o número do seu telefone celular e contratar o serviço:\n\n 1. Site: Após o login, vá até a página do SMS Controle Total e cadastre seu celular. \n 2. Lojas Carrefour: Solicite para o atendente do Cartão Carrefour a efetivação do seu cadastro. \n 3. Atendimento: Ligue na Central de Atendimento e solicite a adesão ao serviço. Selecione o telefone certo para sua necessidade, para saber, basta acessar este link que irá direcioná-lo à página com os telefones das centrais de atendimento:https://www.carrefoursolucoes.com.br/central-telefonica \n 4. Terminal de Autoatendimento: Vá até um terminal e tenha acesso o serviço, cadastrando o seu celular. \n\n Para mais informações, acesse: https://www.carrefoursolucoes.com.br/sms-controle-total")
});

bot.onText(/\/Parcela Total/, (message) => {
    bot.sendMessage(message.chat.id, "Com as novas regras do Conselho Monetário Nacional (Resolução nº 4.549/2017), ao optar pelo pagamento mínimo da fatura, você poderá financiar o saldo pelo crédito rotativo por apenas um mês. Na fatura seguinte, você deverá pagar o que sobrou da fatura anterior ou optar por uma das modalidades de parcelamento ofertadas com juros reduzidos. Para saber mais e tirar possíveis dúvidas, acesse: https://www.carrefoursolucoes.com.br/parcela-pronta")
});

//Todas as opções para o comando Promoções
bot.onText(/\/Promoções/, (message) => {
    bot.sendMessage(message.chat.id, "Para participar é fácil! A cada R$ 10,00 em compras com o cartão carrefour, você ganha um número da sorte!\N\n Aumente suas chances comprando no Carrefour e ganhando números da sorte em dobro OU contratando um seguro no cartão e assim ganhando mais um número da sorte!\n\n São sorteados 8 prêmios de 50 mil reais em barras de ouro pela Loteria Federal ao final da Promoção, e 200 valos compras de R$ 250,00 reais (que você pode ganhar na raspadinha virtual)!\n\n Como participar da raspadinha virtual? Basta seguir os passos abaixo:\n\n 1. Acesse 'ver números da sorte' com seu CPF e data de nascimento. \n 2. Clique em 'raspar agora' e veja se tem jogadas disponíveis. \n 3. Aí é só raspar e torcer!\n\n Para saber mais e tirar suas dúvidas, acesse o site do Banco Carrefour, através deste link: https://www.carrefoursolucoes.com.br/promocao")
});