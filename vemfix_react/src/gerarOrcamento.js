import { jsPDF } from 'jspdf'

export function gerarOrcamento(dados) {
    const pdf = new jsPDF()
    let y = 24

    pdf.setFontSize(20)
    pdf.text('Orçamento', 20, y)
    y += 16

    function campo(rotulo, valor) {
        if (y > 265) {
            pdf.addPage()
            y = 24
        }
        pdf.setFontSize(11)
        pdf.setFont('helvetica', 'bold')
        pdf.text(rotulo, 20, y)
        y += 7
        pdf.setFont('helvetica', 'normal')
        const linhas = pdf.splitTextToSize(String(valor || 'Não informado'), 170)
        for (const linha of linhas) {
            if (y > 275) {
                pdf.addPage()
                y = 24
            }
            pdf.text(linha, 20, y)
            y += 6
        }
        y += 7
    }

    campo('Título', dados.titulo)
    campo('Data', dados.data)
    campo('Cliente', dados.cliente)
    campo('Endereço', dados.endereco)
    campo('Valor estimado (R$)', dados.valor)
    campo('Descrição do problema', dados.problema)
    campo('Descrição do serviço', dados.servico)

    return pdf.output('blob')
}
