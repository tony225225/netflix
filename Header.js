import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className='head'>
        <img  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAAB8CAMAAADXRDUkAAAAb1BMVEUAAADjCRTmCRTRCBLfCRPpCRTtCRUuAQTwCRW3CBCgBg4tAgReAwgQAQFcBAhDAwXWCBJvBAqpBw9nBAmWBg2PBg0gAQLHCBEyAgS8BxA7AgV1BAqxBxBNAweIBQwJAAAnAQN8BQsbAQNTAwf5Chbd5grsAAAE30lEQVR4nO2Z25aiOhBAISQYaLFBQOQiis7/f+OQKsK9z6Cdbtc6q/aLCQbilqRSAcsiCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCOIrTruW81XXzqp6g3IA5RE31Wp+sD353p84btwevMLBj+usS2waqOJ9VFYM55rADx3H4VFXq1UtPEL5wJ0pnurTWcDj9nAaTg+G1cmyPuAKWTHtMcCmD1WOoRzuu68eeG5tyO3oMsZE1tVSVXM9KO8lmyCyj/aoYHOk+mN8d9Y4b912cIXwc+YGl7APqvzpqIpb6R8DX/0JLDMchd0iCu2mKp2bKo9g4MbsOS64ielB4an7JlVx4QaX4ODWnSdx2D5C9ZWoLEOgG0vf5PaAisRRmOJvORh2y+7vcbMcBpdWxSveNjWaTbrZfP+VG9fY4KYrw3dicOND43yjWwRtbHWNEoulKTXtJpJ1N+aUseag5jgWEwH/dqTK0Vm7ieO+b/wItrmdsHu/LWbwRXg37cbCYN0NbtaCCNy8IaCBm5tMW21xwzNZWFgxjvDUkJjVu9kS1psVt/PaWeA2nhmvu8UwvmVpVRixDXkptBtG3qfcmPcdN71en2AoiuwMkcQ9GvJSaDebqx/6i259pMfIL7pIa2wBsEZudmO9x+2EywoaevPk8zv0bkwNyne4Wd6wNrLGjBUyuIWXVbfb2lkG51ubm8heLTQj1TGMSbdZXd+aCCgn2fy6G8t84OgX/3Yb7tst08mONLUDmLupzcDXeYkdjc9ad7OZQNjlGTcr6bI7Zt9+wA26+3P7r3xykgqh23x96+HPuV3C7t+djWkjbgwyVtd/zm2xdr/qZuU4KLnJBUC7CZ+D4bvcYuiKeWbV0M314YPH9dJN76S3jEnhIuLxnFuNE8PYpnTilpRwI5KlW//QZEMsYXmdAvXuKbc7BkpYhcy7+YWacSxLVtbuAJkkDOtu81iw1a3p1gDX7BKg3TALZ7lYuq2dZTQvCXRiwhxTT4EQ7dYMweC33Yq+azlr+k20m2W/za0a0gez0aR3G/Xwy/uA0fLBjT0HUvRuB/kmtwQXAAyVRqNJ7/bhsCfdzDxTOHdP8TCM5eaeBI3chtRi833b6Da7wmyPU0LVjUpMFYzvu8Et4utuwf2++3yUdZLeXnKzeZhleeUndfkYuXUS1xwT2vMnPnk1mS4Pbne9jZrlJW0mJaV0Xenspm4bxyRMJqHSMcmDhdsF2ohUZ+32j7j1g3KeT+ofOHpU+aSbJrwu3HDdVsl1BE1k/CNuhVxz61m4Lcbkes41usLSrcAeYV0bvRow7maFbLubfsem3WS73ZbPu/n4HgdCaYqT4PEjbnjxNTe1yXGdkZvLOOfV4NZ4VVXls9cUO6lmKkzWdt/T/h0LtzPM8XbjCM2hQ4PRZOx2mY5JqX6OCnNh6KhIl76SNFxPxWUft1HWr/Ish1ii/ilhwxoAWyvb7eYY5uvrq84rjN1ObTxuu5U51C750U/rJtpfCpMLanvTmzr1fdirhVLdUG0TsbHp9xm7WYl0eVb5ePHArNEqh32TVJl+dVM4oy2WAY4w8roxbvKB9SskIbeFMPYuP/H8tImLfzf8De6XfZn6nqk3p6dfGHlPEhjd6BAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRDE/4y/31FZd+0oHp8AAAAASUVORK5CYII='
         alt='hi'></img>
         </div>
         <div className='sec'>
         <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8sWItJHAxNH9OOPWQ9urcp2EaSKTu-Cw4UA&usqp=CAU'
         alt='hi'></img>
         </div>
        <div className='list'>
        <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">Movies</a></li>
           <li><a href="#">TV Shows</a></li>
           <li><a href="#">My List</a></li>
           </ul>
        </div>
    </div>
  )
}

export default Header