function atualizarDataHorario() {
    const agora = new Date();
    const dataHorario = agora.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).replace(',', '');
    document.getElementById('data-horario').textContent = `Relatório emitido em: ${dataHorario}`;
}

atualizarDataHorario();