AFRAME.registerComponent('wire-fence',{
    init:function(){
        var posX = -20
        var posZ = 65
        for(var i = 0;i<10;i++){
            var wireFence1 = document.createElement('a-entity')
            var wireFence2 = document.createElement('a-entity')
            var wireFence3 = document.createElement('a-entity')
            var wireFence4 = document.createElement('a-entity')
            posX = posX+5
            posY = 2.5
            posZ = posZ-10
            var scale = {x:2,y:2,z:2}
            wireFence1.setAttribute('id','wireFence1'+i)
            wireFence2.setAttribute('id','wireFence2'+i)
            wireFence3.setAttribute('id','wireFence3'+i)
            wireFence4.setAttribute('id','wireFence4'+i)

            wireFence1.setAttribute('position',{
                x:posX,y:posY,z:-20
            })
            wireFence2.setAttribute('position',{
                x:posX,y:posY,z:65
            })
            wireFence3.setAttribute('position',{
                x:posX,y:posY,z:posZ
            })
            wireFence4.setAttribute('position',{
                x:posX,y:posY,z:posZ
            })

            wireFence1.setAttribute('scale',scale)
            wireFence2.setAttribute('scale',scale)
            wireFence3.setAttribute('scale',scale)
            wireFence4.setAttribute('scale',scale)

            wireFence1.setAttribute('gltf-model','./assets/barbed_wire_fence/scene.gltf')
            wireFence2.setAttribute('gltf-model','./assets/barbed_wire_fence/scene.gltf')
            wireFence3.setAttribute('gltf-model','./assets/barbed_wire_fence/scene.gltf')
            wireFence4.setAttribute('gltf-model','./assets/barbed_wire_fence/scene.gltf')

            wireFence1.setAttribute('static-body',{})
            wireFence2.setAttribute('static-body',{})
            wireFence3.setAttribute('static-body',{})
            wireFence4.setAttribute('static-body',{})

            var scene = document.querySelector('#scene')
            scene.appendChild(wireFence1)
            scene.appendChild(wireFence2)
            scene.appendChild(wireFence3)
            scene.appendChild(wireFence4)
        }
    }
})

AFRAME.registerComponent('boxes',{
    schema:{
        height:{type:'number',default:2},
        width:{type:'number',default:2},
        depth:{type:'number',default:2}
    },
    init:function(){
        var px = [22,17,23,-17,-10,-12,5,9,0,-30,-5,-7,12.5,-12,-2,29,40,35,-14,-26]
        var pz = [54.5,-4.7,14,56,41,50,57,7,-5,10,-26,-35,-9,9,-54,48,31,27,20,-7]
        for(var i = 0;i<20;i++){
            var box = document.createElement('a-entity')
            box.setAttribute('id','box'+i)
            
            posX = px[i]
            posY = 2
            posZ = pz[i]
            box.setAttribute('position',{
                x:posX,
                y:posY,
                z:posZ
            })

            box.setAttribute('geometry',{
                primitive:'box',
                height:this.data.height,
                width:this.data.width,
                depth:this.data.depth
            })

            box.setAttribute('material',{
                src:'./assets/images/boxtexture1.jpg',
                repeat:'1 1 1'
            })

            box.setAttribute('static-body',{})

            var scene = document.querySelector('#scene')

            scene.appendChild(box)
        }
    }
})