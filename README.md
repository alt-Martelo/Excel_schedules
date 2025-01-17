# Gerador de Horário - Aplicação Web

Este projeto é uma ferramenta simples baseada na web que permite aos usuários carregar um ficheiro Excel (`.xlsx` ou `.xls`), processá-lo e fazer o download de um ficheiro CSV com horários de eventos, incluindo atribuições de salas, intervalos e pausas.

## Funcionalidades

- Carregar um ficheiro Excel contendo a programação de eventos.
- Processar a programação para gerar os horários de cada evento, com atribuições de salas, intervalos e pausas.
- Ordenar os eventos começando às 10:00.
- Fazer o download de um ficheiro CSV com os horários dos eventos, com o nome do ficheiro contendo a data atual no formato `horario-DD-MM-YYYY.csv`.

## Como Funciona

1. Carregue um ficheiro Excel contendo os dados dos eventos.
2. O ficheiro deve ter a seguinte estrutura:
   - Coluna 1: Título do Evento
   - Coluna 2: Sala
   - Coluna 3: Duração (em minutos)
   - Coluna 4: Trailer (tempo entre sessões)
   - Coluna 5: Pausa (em minutos)
   - Coluna 6 para a frente: Horários de início das sessões

3. Após dar load, clicar no botão para processar os dados e fazer o download do ficheiro CSV com a programação dos eventos.

## Tecnologias Utilizadas

- HTML
- JavaScript
- [Biblioteca SheetJS](https://sheetjs.com/) (para ler e processar ficheiros Excel)
- API Blob (para fazer o download do ficheiro CSV gerado)

## Como Usar

1. Clone este repositório para o seu computador:
   ```bash
   git clone https://github.com/seikohanma/gerador-horario.git
