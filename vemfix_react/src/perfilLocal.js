const chave = 'vemfix-perfil'

export const perfilInicial = {
    tipo: 'prestador',
    nome: 'Lucia Ferreira',
    email: '',
    telefone: '',
    cidade: 'São Paulo',
    descricao: 'Serviços de limpeza residencial e pós-obra. Equipe treinada e produtos de qualidade. Atendo toda a Grande São Paulo com pontualidade e profissionalismo.',
    especialidades: ['Limpeza']
}

export function lerPerfil() {
    try {
        return JSON.parse(localStorage.getItem(chave)) || perfilInicial
    } catch {
        return perfilInicial
    }
}

export async function salvarPerfil(dados, senha) {
    const perfil = { ...lerPerfil(), ...dados }

    if (senha) {
        const sal = crypto.getRandomValues(new Uint8Array(16))
        const entrada = new Uint8Array([...sal, ...new TextEncoder().encode(senha)])
        const hash = await crypto.subtle.digest('SHA-256', entrada)
        perfil.senha = {
            sal: Array.from(sal),
            hash: Array.from(new Uint8Array(hash))
        }
    }

    localStorage.setItem(chave, JSON.stringify(perfil))
}
