import { calculateInvestmentResults, formatter } from "../util/investment"

export const Results = ( { input } ) => {

    const resultsData = calculateInvestmentResults(input)

    //                         el resultado de la pocision 0 que es el valor a fin de año 
    //                         menos el resultado de la posicion 0 del interes
    //                         menos el resultado de la posicion 0 del annual
    const initialInvestement = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment
  
    return (
        
        <table id="result">

            <thead>

                <tr>

                    <th>Year</th>

                    <th>Investiment Value</th>

                    <th>Interest (Year)</th>

                    <th>Total Interest</th>

                    <th>Invested Capital</th>

                </tr>

            </thead>

            <tbody>

                {resultsData.map(yearData => {

                    //                       El valor del fin de año menos el anual valor por año menos la variable de arriba
                    const totalInterestValue = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestement

                    //                          El valor de find de año meno el total de intereses
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterestValue
                    
                    return <tr key={yearData}>

                        <td>{yearData.year}</td>

                        <td>{formatter.format(yearData.valueEndOfYear)}</td>

                        <td>{formatter.format(yearData.interest)}</td>

                        <td>{formatter.format(totalInterestValue)}</td>

                        <td>{formatter.format(totalAmountInvested)}</td>

                    </tr>    

                
                })}

            </tbody>

        </table>

    )

}