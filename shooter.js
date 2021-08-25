AFRAME.registerComponent('bullets',{
    init:function(){
        this.shootBullets()
    },
    shootBullets:function(){
        window.addEventListener('keydown',(e)=>{
            if(e.key==='z'){
                var bullet = document.createElement('a-entity')
                bullet.setAttribute('geometry',{
                    primitive:'sphere',
                    radius:0.1,
                })
                bullet.setAttribute('material','color','black')
                var cam = document.querySelector('#camera')
                var pos = cam.getAttribute('position')
                var scene = document.querySelector('#scene')

                bullet.setAttribute('position',{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z
                })

                var camera = document.querySelector('#camera').object3D
                var direction = new THREE.Vector3()
                camera.getWorldDirection(direction)
                bullet.setAttribute('velocity',direction.multiplyScalar(-10))
                bullet.addEventListener('collide',this.removeBullets)
                bullet.setAttribute('dynamic-body',{
                    shape:'sphere',
                    mass:0
                })
                scene.appendChild(bullet)
                this.shootSound()
            }
        })
    },

    removeBullets:function(e){

        //original entity (bullet)
        console.log(e.detail.target.el)

        //other entity on which the bullet touches
        console.log(e.detail.body.el)

        var element = e.detail.target.el
        var elementHit = e.detail.body.el

        if(elementHit.id.includes('box')){
            elementHit.setAttribute('material',{
                opacity:1,
                transparent:true
            })
        }

        var impulse = new CANNON.Vec3(-2,2,1)
        var worldPoint = new CANNON.Vec3().copy(elementHit.getAttribute('position'))
        elementHit.body.applyImpulse(impulse,worldPoint)
        element.removeEventListener('collide',this.shoot)
        var scene = document.querySelector('#scene')
        scene.removeChild(element)
    },

    shootSound:function(){
        var entity = document.querySelector('#sound1')
        entity.components.sound.playSound()
    }
})