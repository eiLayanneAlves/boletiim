<!doctype html>
<html>
    <head>
        <title>Curso Javascript Completo 2018</title>
        <meta charset="utf-8">
        
        <link href="css/bootstrap.css" rel="stylesheet">
        <link href="css/bootstrap-theme.css" rel="stylesheet">
        
        <script src="beluga.js"></script>

    </head>
    <body>
        <div class="container">
            <h1>Curso Javascript Completo 2018</h1>
        </div>
        
        
        <section>
        	<div class="container">
	        
		      	<h2>MÃ©dia dos alunos</h2>
				<table class="table js-tabela">
					<thead>
						<tr>
							<th>Nome</th>
							<th>Nota 1</th>
							<th>Nota 2</th>
							<th>Nota 3</th>
							<th>Nota 4</th>
							<th>MÃ©dia</th>
						</tr>
					</thead>
					<tbody>
						<tr class="aluno" >
							<td class="aluno-nome">Gertrude</td>
							<td class="aluno-n1">10</td>
							<td class="aluno-n2">8.5</td>
							<td class="aluno-n3">9</td>
							<td class="aluno-n4">7.5</td>	
							<td class="aluno-m"></td>
						</tr>

						<tr class="aluno" >
							<td class="aluno-nome">Rey</td>
							<td class="aluno-n1">5</td>
							<td class="aluno-n2">8.5</td>
							<td class="aluno-n3">6.5</td>
							<td class="aluno-n4">7.5</td>
							<td class="aluno-m"></td>
						</tr>

						<tr class="aluno" >
							<td class="aluno-nome">Jessilda</td>
							<td class="aluno-n1">8</td>
							<td class="aluno-n2">8.5</td>
							<td class="aluno-n3">7</td>
							<td class="aluno-n4">7.5</td>
							<td class="aluno-m"></td>
						</tr>

						<tr class="aluno">
							<td class="aluno-nome">LindÃ³ia</td>
							<td class="aluno-n1">6.5</td>
							<td class="aluno-n2">8.5</td>
							<td class="aluno-n3">10</td>
							<td class="aluno-n4">7.5</td>
							<td class="aluno-m"></td>
						</tr>
						<tr class="aluno" >
							<td class="aluno-nome">Creysson</td>
							<td class="aluno-n1">10</td>
							<td class="aluno-n2">9.5</td>
							<td class="aluno-n3">10</td>
							<td class="aluno-n4">8.5</td>
							<td class="aluno-m"></td>
						</tr>
					</tbody>
				</table>
	        	
        	</div>	
        </section>

        <script>
            
            (function(){
                'use strict'
                var trs = document.querySelectorAll('.js-tabela tbody .aluno');                
                
                var x = 0;
                while(trs[x]){
                    var linhaAluno = trs[x];  
                    var tds = linhaAluno.querySelectorAll('td');
                    var notas = recuperarNumerosDeColunas(tds);  
                    var media = calcularMedia.apply(this, notas);
                    
                    linhaAluno.querySelector('.aluno-m').textContent = media;
                    x++;
                }
                
                function recuperarNumerosDeColunas(tds){
                    var x= 0;
                    var arr = [];
                    while( tds[x] ){
                        if( !isNaN( tds[x].textContent ) && tds[x].textContent !== '' ){
                            arr.push( parseFloat(tds[x].textContent ) );
                        }
                        x++;
                    }
                    return arr;
                }
            })()
            function calcularMedia(){                    
                    
    var total = 0;
    var qtd = arguments.length;
    var x = 0;
    //while(arguments[x]){
    while(typeof arguments[x] === 'number'){
        total += arguments[x];
        x++
    }                    

    return (total / qtd).toFixed(2);
}

function sortear(n){
    var _n = n || 1;
    var nSorteado = Math.random();
    nSorteado = nSorteado * _n;
    nSorteado = Math.floor(nSorteado);
    return nSorteado;
}
        </script>
        
    </body>
</html>
