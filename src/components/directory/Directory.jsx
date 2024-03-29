
import React from 'react';
import  MenuItems from '../menu-items/MenuItems';
import './DirectoryStyle.scss';



class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                  title: 'Arabic',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'English',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'French',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'German',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens',
                  size: 'large'
                },
                {
                  title: 'Translation',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens',
                  size: 'large'
                }
              ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({title, id, imageUrl, size}) => (
                    <MenuItems title={title} key={id} imageUrl={imageUrl} size={size}/>
                ))}
            </div>
        )
    }
}



export default Directory;