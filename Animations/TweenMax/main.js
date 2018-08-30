/**
    Tuto TweenMax
    @author https://github.com/arlg/
**/

class Website{

    constructor(){
        this.box1 = document.querySelector('.box1');
        this.box2 = document.querySelector('.box2');
        this.box3 = document.querySelector('.box3');
    }

    init(){

        /*
            EXEMPLES
        */

        // 1 : Tween de base, déplacement en left de 0 à 500px
        // TweenMax.to( this.box1, 2, { left: '500px' } );

        // 2 : Tween de base, déplacement en left avec une autre unité, même version en x
        // Il faut toujours mieux pour les performances animer les propriétés x, y, opacity, scale plutôt que des left/right/top/bottom/marges/padding .... -> Voir les principes d'animation de Paul Lewis
        // TweenMax.to( this.box1, 2, { left: '50em' } );
        // TweenMax.to( this.box2, 2, { x: '50em' } );

        // 3 : Delay
        // TweenMax.to( this.box2, 2, { x: 500, delay: 2 } );

        // 3.2 : Border-radius
        // TweenMax.to( this.box2, 2, { x: 500, delay: 1, borderRadius: 40 } );

        // 3.3 : Rotato
        // TweenMax.to( this.box1, 2, { delay: 1, rotation:-360 } );
        // TweenMax.to( this.box2, 2, { delay: 1, rotation:-360, ease: Power0.easeNone } );


        //3.4 Rotato avec transform-origin
        //TweenMax.to( this.box2, 2, { delay: 1, rotation:45, transformOrigin: "100% 100%" } ); // !! Peut être en pourcentage

        // 4 : onComplete (chaînage des animations), opacity
        // TweenMax.to( this.box2, 0.6, { x: 500, delay: 1 } ), onComplete:()=>{
        //
        //     TweenMax.to( document.querySelector('.box3'), 0.6, { x: 500, opacity: 1, onComplete:() => {
        //
        //         TweenMax.to( this.box1, 0.4, { y: 300 } )
        //
        //     } } )
        //
        // } } );

        // 5 : repeat, EX: repeat : -1 pour l'infini
        // TweenMax.to( this.box2, 0.4, { x: 500, delay: 0, repeat: 2} );

        // 6 : Différents Easings, set pour définir des styles
        // https://greensock.com/ease-visualizer
        // TweenMax.to( this.box1, 2, { x: 500, ease: Circ.easeInOut , delay: 1 } );
        // TweenMax.to( this.box2, 2, { x: 500, ease: Expo.easeOut , delay: 1 } );
        // TweenMax.set( this.box3, {opacity: 1} );
        // TweenMax.to( this.box3, 2, { x: 500, ease: Elastic.easeOut.config(1, 0.3) , delay: 1 } );


        //7 : Stagger : enchaîner des animations sur une tableau d'éléments
            // let elems = this.createElems();

            // 7.1 WAOUUU
            // TweenMax.staggerTo( elems , 1, { x: 500, y: 100, delay: 1 }, 0.04 );

            //7.2 change background color (propriete css)
            // TweenMax.staggerTo( elems , 1, { x: 500, delay: 1, backgroundColor: 'rgb(255, 255, 255)' }, 0.08 );

            //7.3 Change scale
            // TweenMax.staggerTo( elems , 1.4,
            //     {
            //         x: 500,
            //         delay: 1,
            //         backgroundColor: '#40514E',
            //         scale: 2,
            //         ease: Bounce.easeInOut,
            //         rotation: 45
            //     }, 0.08 );

        // !! Toujours animer si possible le x, y, z, et le scale au lieu du left / right / width / height

        // 8 From to
        // TweenMax.fromTo( this.box2, 0.4, { x: 500 }, { x: 0, delay: 1 } );

        // 9. Timelines
        // const tl = new TimelineMax(
        //     {
        //         delay : 0, // Délai avant le lancement
        //         paused : true, // Etat de pause au début
        //         repeat : 0, // Nbre de répétitions, -1 pour une loop infinie
        //         // onStart : _onStart,
        //         onComplete : ()=>{
        //             tl.reverse()
        //         }
        //     });
        //
        //     tl.to(this.box1, 1, {x:500,y:0})
        //     .to(this.box1, 1, {x:500,y:100}, '-=1')
        //     .to(this.box1, 1, {x:300,y:100})
        //     .to(this.box1, 1, {x:500,y:0})
        //     .to(this.box2, 0.4, { x: 700, scaleY: 2, y: 300 })
        //     .to(this.box2, 0.4, { x: 700, scaleY: 2, y: 300 });
        //
        // tl.play()


        // 10. Tween de proprietes d'objet, avec un easing possible (chiffres par ex.)

        // const counter = { value: 0 };
        //
        // let domCounter = document.createElement('span');
        // document.querySelector('body').appendChild(domCounter);
        //
        // TweenMax.to(counter, 5, {
        //     value: 100,
        //     onUpdate: function () {
        //         domCounter.textContent = Math.ceil(counter.value);
        //     },
        //     ease: Bounce.easeInOut
        // });

    }

    /**
     * Creates 30 box4
    **/
    createElems(){
        let elems = [],
            elem,
            body = document.querySelector('body');
        for (var i = 0; i < 30; i++) {
            elem = document.createElement('div');
            elem.className = "box4";
            elems.push(elem);
            body.appendChild(elem);
        }

        return elems;
    }

}


// Entry point
document.addEventListener('DOMContentLoaded', function(){

    const website = new Website();
    website.init();

});
