import { Coordinate } from "./BoardNode"
import { PlayerId } from "./Player"
import { IPlayerDictionary, ICounterDictionary, ITurnDictionary } from "../store/game/types"
import { ICounter } from "./Counter"

export type Action = {
    counterId: string;
    coord: Coordinate;
}
export type Phase = 'deploy' | 'move'
export interface ITurn {
    id: string;
    phase: Phase;
    instruction: string;
    playerId: PlayerId;
    counterIdToDeploy: string | null;
    actionTaken: Action | null;
}

export class Turn implements ITurn {
    constructor(turns: ITurnDictionary, players: IPlayerDictionary, counters: ICounterDictionary){
        const playerAndTurnId = Turn.getTurnIdAndPlayerIdFromTurns(turns);
        this.id = playerAndTurnId.turnId;
        this.playerId = playerAndTurnId.playerId;
        this.phase = Turn.getPhaseFromCounters(counters);
        this.counterIdToDeploy = Turn.getCounterIdToDeploy(this.phase, counters, this.playerId);
        this.instruction = Turn.getIntructionFromPhaseAndPlayers(this.phase, players,this.playerId,this.counterIdToDeploy);
    }
    public id: string;
    public playerId: PlayerId;
    public phase: Phase;
    public counterIdToDeploy: string | null;
    public instruction = '';
    public actionTaken = null;

    private static getTurnIdAndPlayerIdFromTurns(turns: ITurnDictionary): {turnId: string, playerId: PlayerId} {
        let maxTurn : ITurn | undefined;
        let playerId: PlayerId = '1';
        let turnId: string = '1';
        Object.keys(turns).forEach(turnId=>{
            const turn = turns[turnId];
            if(!maxTurn) {
                maxTurn = turn;
            } else if(maxTurn.id < turn.id){
                maxTurn = turn;
            }
        });
        if(!maxTurn){
            return {
                playerId,
                turnId
            }
        } else {
            playerId = maxTurn.playerId === '1' ? '2' : '1';
            turnId = (Number(maxTurn.id) + 1).toString(); 
        }
        return maxTurn ? { playerId :maxTurn.playerId as PlayerId, turnId: maxTurn.id} : {playerId, turnId};
    }
    private static getPhaseFromCounters(counters: ICounterDictionary): Phase{
        return Object.keys(counters).map(counterKey=>counters[counterKey].status).some(status => status === 'not-deployed') ? 'deploy' : 'move';
    }

    private static getIntructionFromPhaseAndPlayers(phase: Phase, players: IPlayerDictionary, playerId: PlayerId, counterIdToDeploy: string | null){
        const player = players[playerId];
        if(phase === 'deploy'){
            return `${player.name} place counter ${counterIdToDeploy}`;
        } else {
            return `${player.name} move a counter`; 
        }
    }
    private static getCounterIdToDeploy(phase: Phase, counters: ICounterDictionary, playerId: PlayerId): string | null {
        if (phase !== 'deploy') {
            return null;
        } else {
            let nextCounterToDeploy: ICounter | undefined;
            Object.keys(counters).forEach(counterKey=>{
                const counter = counters[counterKey];
                const isPlayerCounter = playerId === counter.playerId;
                const hasNotDeployed = counter.status === 'not-deployed';
                const isLowerThanCurrent = !nextCounterToDeploy || counter.counterId < nextCounterToDeploy.counterId;
                if(isPlayerCounter && hasNotDeployed && isLowerThanCurrent)nextCounterToDeploy = counter;
            });
            return nextCounterToDeploy ? nextCounterToDeploy.key : null;
        }
    }
    
    public get poco(): ITurn{
        return {
            id: this.id,
            counterIdToDeploy: this.counterIdToDeploy,
            instruction: this.instruction,
            phase: this.phase,
            playerId: this.playerId,
            actionTaken: this.actionTaken
        }
    }
}