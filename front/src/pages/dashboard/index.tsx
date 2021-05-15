import React from 'react'
import BarChart from '../../components/barchart'
import DataTable from '../../components/data-table'
import DonutChart from '../../components/donut-chart'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'

function DashBoard() {
    return (
        <div>
            <NavBar />
            <div className="row py-3">
                <div className="col-sm-6">
                    <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
                    <BarChart />
                </div>
                <div className="col-sm-6">
                    <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
                    <DonutChart />
                </div>
            </div>
            <div className="py-3">
                <h2 className="text-primary">Todas as vendas</h2>
            </div>
            <DataTable />
            <Footer />
        </div>
    )
}

export default DashBoard
