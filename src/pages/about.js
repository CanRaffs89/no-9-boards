import React from 'react'
import Layout from '../components/Layout'

export default function about() {
    return (
        <Layout>
            <div className="inner-content">
                <h2>About</h2>
                <p>Hello <span role="img" aria-label="waving-hand">👋</span> - I'm Candice, the creative hand behind No. 9 Boards.</p>
                <p>I love creating interesting and unusual designs inspired by old movies, comic art and folk horror.</p>
                <p>If you would like to purchase one of my cruiser boards, please visit my <a href="https://www.ebay.co.uk/usr/canraffs89">eBay</a> or <a href="https://www.etsy.com/uk/shop/No9Boards">Etsy</a> store.</p>
            </div>
        </Layout>
    )
}
