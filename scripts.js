
let Call_to_Action = function() {
    let body = document.body;

    let selectionWidget = document.createElement('div');
    selectionWidget.classList.add('selection_widget');

    let topWidget = document.createElement('div');
    topWidget.classList.add('top');

    let h2 = document.createElement('h2');
    h2.innerHTML = 'Choose Your Option';
    h2.classList.add('title');
    body.appendChild(h2);

    let p = document.createElement('p');
    p.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
    p.classList.add('text');
    body.appendChild(p);

    let bottomWidget = document.createElement('div');
    bottomWidget.className = 'bottom';
    document.body.appendChild(bottomWidget);

    for (let i = 1; i <= 2; i++) {
        let choiceWidget = document.createElement('div');
        choiceWidget.className = 'choice';

        let h3 = document.createElement('h3');
        h3.textContent = (i === 1) ? `Freelancer`: `Studio`;
        choiceWidget.appendChild(h3);

        let h2 = document.createElement('h2');
        h2.textContent = `Initially designed to`;
        h2.style.cssText = 'margin: 30px 90px; text-align: center;font-family: "Arvo", serif; font-size: 36px; font-weight: 500;line-height: 46px; color: #212121; text-transform: none;'
        choiceWidget.appendChild(h2);

        let p = document.createElement('p');
        p.textContent = `But I must explain to you how all this mistaken idea of denouncing`;
        p.style.cssText = 'margin: 30px 40px 60px 40px; font-family: "Open Sans", sans-serif; font-size: 12px; font-weight: 400;  line-height: 22px; color: #9FA3A7;'
        choiceWidget.appendChild(p);

        let button = document.createElement('button');
        button.textContent = `Start here`;
        button.style.cssText = 'margin: 0 90px 60px 90px; padding: 15px 25px; background-color: transparent; border: 3px solid #FFC80A; border-radius: 30px; cursor: pointer; font-family: "Montserrat", sans-serif; font-size: 12px; font-weight: bold; letter-spacing: 2.4px; text-transform: uppercase; color: #212121;'
        choiceWidget.appendChild(button);

        choiceWidget.addEventListener('mouseover', function() {
            h2.style.color = 'white';
            p.style.color = 'white';
            button.style.color = 'white';
        });

        choiceWidget.addEventListener('mouseout', function() {
            h2.style.color = '#212121';
            p.style.color = '#9FA3A7';
            button.style.color = '#212121';
        });

        bottomWidget.appendChild(choiceWidget);
    }


    let style = document.createElement('style');
    style.innerHTML = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            padding: 3%;
        }

        .title {
            margin-bottom: 20px;
            font-family: "Arvo", serif;
            font-size: 36px;
            font-weight: 500;
            color: #212121;
            text-align: center;
            padding-top: 120px
        }

        .text {
            font-family: "Open Sans", sans-serif;
            font-size: 14px;
            font-weight: 400;     
            color: #9FA3A7; 
            text-align: center;
            margin-bottom: 55px;
        }

        .bottom {
            width: 900px;
            height: 480px;
            margin-left: auto;
            margin-right: auto;
            display: flex;
            justify-content: space-between;
            border: 1px solid #9FA3A7;
            border-radius: 10px;
            text-align: center;   
        }

        .choice {
            padding-top: 80px;
            padding-botom: 30px;
            font-family: "Montserrat", sans-serif;
            font-size: 12px;
            font-weight: bold;
            letter-spacing: 2.4px;
            text-transform: uppercase;
            color: #9FA3A7;
        }

        .choice:hover {
            color: #FFC80A;
            background-color: #8F75BE;
            border-radius: 10px;
        }

    `;
    
    document.head.appendChild(style);
}

Call_to_Action();