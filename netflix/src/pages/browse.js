import React, { useContext } from 'react'
import {useContent} from '../hooks'

export default function Browse(){
    const {series} = useContent('series')
    const {films} = useContent('films')
    console.log('series')
    return ('Browse hi');
}