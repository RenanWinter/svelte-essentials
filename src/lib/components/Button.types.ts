import type { Snippet } from "svelte";

export type ButtonColor = 'brand' | 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
export type ButtonStyle = 'regular' | 'outline' | 'dash' | 'soft' | 'ghost' | 'link'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonShape = 'rect' | 'square' | 'circle'

export interface ButtonProps {
    /**
     * Define o estilo visual do botão
     * @default 'primary'
     */
    color?: ButtonColor;

    /**
     * Define o tamanho do botão
     * @default 'sm'
     */
    size?: ButtonSize;


    /**
     * Estilo do botão
     * @default 'regular'
     */
    style?: ButtonStyle;

    /**
     * Define o formato do botão
     * @default 'rect'
     */
    shape?: ButtonShape;

    /**
     * Se verdadeiro, o botão receberá um padding adicional nas laterais
     * @default false
     */
    wide?: boolean;

    /**
     * Extende o botão para a largura máxima disponível
     */
    block?: boolean;

    /**
     * Se verdadeiro, mostra um indicador de carregamento
     * @default false
     */
    loading?: boolean;

    /**
     * Se verdadeiro, o botão ficará desabilitado
     * @default false
     */
    disabled?: boolean;

    /**
     * Desabilita o botão até que a ação de click finalize
     */
    disableOnClick?: boolean

    /**
     * seta o estado de loading do botão até que a ação de click finalize
     */
    loadingOnClick?: boolean

    /**
     * Adiciona classes ao botão 
     */
    classed?: string;

    /**
     * Adiciona estilos ao botão
     */
    styled?: string;

    /**
     * Define um contexto para o botão que será repassado para o callback click
     */
    context?: unknown;

    /**
     * Callback de clique do botão
     */
    onclick: (context?: unknown) => Promise<void>

    labelLoading?: string
    labelDisabled?: string

    /**
     * texto do botão a ser renderizado como html
     */
    label?: string

    children?: Snippet

} 