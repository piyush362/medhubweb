import React from 'react'
import './dashboard.css'

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="navbar">
                <div className="nav-logo">
                    <img src="https://res.cloudinary.com/dkr75ykb4/image/upload/v1667656693/medhub/medhublogo_x6cna3.png" alt="navimg" />
                    <h2>MedHub</h2>
                </div>
                <div className="line"></div>
                <a href="#">Dashboard</a>
                <a href="#">Add Stocks</a>
                <a href="#">Order Meds</a>
                <a href="#">Bills</a>
                <div className="line"></div>
                <button>Log-out</button>
            </div>
            <div className="hero">
                <div className="hero-greet">
                    <h1>Hello</h1>
                    <h1 className='green'>Jack-Up-Bhai</h1>
                </div>
                <img src="https://res.cloudinary.com/dkr75ykb4/image/upload/v1667676356/medhub/doctor-removebg-preview_tqfm0s.png" alt="img" />
            </div>
            <div className="dashboard-cards">
                <div className="card">
                    <img src="/images/stock.svg" alt="" />
                    <h4>21</h4>
                    <h6>Boxes in stocks</h6>
                </div>
                <div className="card">
                    <img src="/images/finished.svg" alt="" />
                    <h4>21</h4>
                    <h6>Boxes in stocks</h6>
                </div>
                <div className="card">
                    <img src="/images/user.svg" alt="" />
                    <h4>21</h4>
                    <h6>Boxes in stocks</h6>
                </div>
                <div className="card">
                    <img src="/images/pending.svg" alt="" />
                    <h4>21</h4>
                    <h6>Boxes in stocks</h6>
                </div>

            </div>
        </div>
    )
}

export default Dashboard